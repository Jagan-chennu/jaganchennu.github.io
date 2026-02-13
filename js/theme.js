// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const body = document.body;
  
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }

  // Theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('light-mode');
      
      const isLightMode = body.classList.contains('light-mode');
      localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
      updateThemeIcon(isLightMode ? 'light' : 'dark');
    });
  }
});

function updateThemeIcon(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

// Course Navigation for Linux Concepts
document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.course-nav button');
  const lessons = document.querySelectorAll('.course-lesson');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.dataset.lesson;
      
      // Remove active class from all buttons and lessons
      navButtons.forEach(btn => btn.classList.remove('active'));
      lessons.forEach(lesson => lesson.classList.remove('active'));
      
      // Add active class to clicked button and corresponding lesson
      this.classList.add('active');
      const activeLesson = document.getElementById(target);
      if (activeLesson) {
        activeLesson.classList.add('active');
        
        // Scroll to content
        activeLesson.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Set first lesson as active by default
  if (navButtons.length > 0) {
    navButtons[0].click();
  }
});
