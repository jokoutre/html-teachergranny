document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function navigate(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % images.length;
        } else {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        updateCarousel();
    }

    function updateCarousel() {
        imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.prev-button').addEventListener('click', () => navigate('prev'));
    document.querySelector('.next-button').addEventListener('click', () => navigate('next'));
});
// JavaScript Document