// Simple carousel/slider implementation
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.swiper');
  
  if (!slider) {
    return; // Swiper not present on this page
  }

  const slides = slider.querySelectorAll('.swiper-slide');
  const container = slider.querySelector('.swiper-wrapper');
  const prevBtn = slider.querySelector('.swiper-button-prev');
  const nextBtn = slider.querySelector('.swiper-button-next');
  const bullets = slider.querySelectorAll('.swiper-pagination-bullet');

  let currentIndex = 0;
  let autoplayInterval;

  function updateSlider() {
    // Update active slide
    slides.forEach((slide, idx) => {
      slide.classList.remove('swiper-slide-active');
      if (idx === currentIndex) {
        slide.classList.add('swiper-slide-active');
      }
    });

    // Update bullets
    bullets.forEach((bullet, idx) => {
      bullet.classList.remove('swiper-pagination-bullet-active');
      if (idx === currentIndex) {
        bullet.classList.add('swiper-pagination-bullet-active');
      }
    });

    // Update container position for smooth scrolling effect
    const offset = -currentIndex * 100;
    if (container) {
      container.style.transform = `translateX(${offset}%)`;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetAutoplay();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetAutoplay();
  }

  function goToSlide(idx) {
    currentIndex = idx;
    updateSlider();
    resetAutoplay();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  bullets.forEach((bullet, idx) => {
    bullet.addEventListener('click', () => goToSlide(idx));
  });

  // Initialize
  updateSlider();
  startAutoplay();

  // Pause autoplay on hover
  slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  slider.addEventListener('mouseleave', () => startAutoplay());
});
