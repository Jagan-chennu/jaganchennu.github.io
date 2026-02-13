// Carousel/Slider implementation for Recent Posts
// Configuration: 1 post per view, horizontal transitions
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

  // Configuration
  const CONFIG = {
    slidesPerView: 1,      // Only 1 post visible at a time
    slidesPerGroup: 1,     // Navigate 1 post at a time
    autoplayInterval: 5000  // 5 seconds
  };

  let currentIndex = 0;
  let autoplayInterval;

  // Create pagination dots - one for each post
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

  // Update carousel position and active states
  function updateCarousel() {
    // Calculate offset: -100% per slide
    const offset = -(currentIndex * 100);
    container.style.transform = `translateX(${offset}%)`;

    // Update active pagination dot
    const dots = paginationContainer.querySelectorAll('.pagination-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  // Navigate to next slide
  function nextSlide() {
    if (currentIndex < items.length - 1) {
      currentIndex += CONFIG.slidesPerGroup;
    } else {
      currentIndex = 0; // Loop back to start
    }
    
    updateCarousel();
    resetAutoplay();
  }

  // Navigate to previous slide
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex -= CONFIG.slidesPerGroup;
    } else {
      currentIndex = items.length - 1; // Loop to end
    }
    
    updateCarousel();
    resetAutoplay();
  }

  // Jump to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoplay();
  }

  // Auto-rotate slides
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, CONFIG.autoplayInterval);
  }

  // Reset autoplay timer
  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners for navigation
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Pause autoplay on hover, resume on leave
  carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  carousel.addEventListener('mouseleave', () => startAutoplay());

  // Initialize carousel
  createPaginationDots();
  updateCarousel();
  startAutoplay();
});


