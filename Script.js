// script.js

const slides = document.querySelectorAll('.slide');
const dots = document.querySelector('.dots');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidesContainer = document.querySelector('.carousel-slides');

let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToSlide(index));
    dots.appendChild(dot);
});
updateDots();

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

// Update active dot
function updateDots() {
    dots.querySelectorAll('div').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next and Previous Buttons
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Auto-play
setInterval(() => {
    nextButton.click();
}, 5000);

const carousel = document.querySelector('.news-carousel');

// Add functionality to scroll left or right
document.querySelector('.view-all').addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


