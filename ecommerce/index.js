document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const content = document.querySelector('.content');
    let index = 0;

    function showSlide(i) {
        const totalSlides = document.querySelectorAll('.slide').length;
        index = (i + totalSlides) % totalSlides;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(() => {
        showSlide(index + 1);
    }, 6000); // Change every 5 seconds
});
