// Carousel/Slider implementation for Recent Posts
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.posts-carousel');
  
  if (!carousel) {
    return; // Carousel not present on this page
  }

  const container = carousel.querySelector('.carousel-container');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const paginationContainer = carousel.querySelector('.carousel-pagination');

  if (!container || !items.length) {
    return;
  }

  let currentIndex = 0;
  let autoplayInterval;

  // Create pagination dots
  function createPaginationDots() {
    paginationContainer.innerHTML = '';
    
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'pagination-dot';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      paginationContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const offset = -(currentIndex * 100);
    container.style.transform = `translateX(${offset}%)`;

    // Update active pagination dot
    const dots = paginationContainer.querySelectorAll('.pagination-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function nextSlide() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to start
    }
    
    updateCarousel();
    resetAutoplay();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1; // Loop to end
    }
    
    updateCarousel();
    resetAutoplay();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoplay();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Pause autoplay on hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  carousel.addEventListener('mouseleave', () => startAutoplay());

  // Initialize
  createPaginationDots();
  updateCarousel();
  startAutoplay();
});

