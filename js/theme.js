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

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults');

  // Blog posts database
  const posts = [
    {
      title: 'Getting Started with Linux: Essential Commands',
      url: 'posts/getting-started-linux.html',
      excerpt: 'Learn the fundamental Linux commands every beginner should know to navigate Linux like a pro.',
      tags: ['Linux', 'Tutorial', 'Beginner'],
      date: 'Feb 13, 2026'
    },
    {
      title: 'Docker Basics: Containerization for Beginners',
      url: 'posts/docker-basics.html',
      excerpt: 'Understand what containers are and why Docker has become essential for modern development.',
      tags: ['Docker', 'DevOps', 'Containers'],
      date: 'Feb 10, 2026'
    },
    {
      title: 'Understanding Linux File Permissions',
      url: 'posts/file-permissions.html',
      excerpt: 'Master chmod and chown to control access to your files and directories with confidence.',
      tags: ['Linux', 'Security', 'Permissions'],
      date: 'Feb 5, 2026'
    },
    {
      title: 'Shell Scripting: Automate Your Tasks',
      url: 'posts/shell-scripting.html',
      excerpt: 'Learn to write bash scripts and automate repetitive tasks to boost your productivity.',
      tags: ['Bash', 'Scripting', 'Automation'],
      date: 'Jan 28, 2026'
    },
    {
      title: 'Git Essentials Guide',
      url: 'posts/git-essentials.html',
      excerpt: 'Version control fundamentals - commit, branch, merge, and collaborate with Git.',
      tags: ['Git', 'Tools', 'Version Control'],
      date: 'Jan 15, 2026'
    },
    {
      title: 'Mastering grep Command',
      url: 'posts/linux-grep.html',
      excerpt: 'Text searching and pattern matching - become a grep expert in minutes.',
      tags: ['Linux', 'Commands', 'Tools'],
      date: 'Dec 28, 2025'
    }
  ];

  function performSearch(query) {
    if (query.trim().length === 0) {
      searchResults.classList.remove('active');
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    displayResults(results, query);
  }

  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No posts found for "' + query + '"</div>';
      searchResults.classList.add('active');
      return;
    }

    let html = '';
    results.forEach(post => {
      html += `
        <div class="search-result-item" onclick="window.location.href='${post.url}'">
          <h4>${post.title}</h4>
          <p>${post.excerpt}</p>
          <small style="color: #888;">${post.date}</small>
        </div>
      `;
    });

    searchResults.innerHTML = html;
    searchResults.classList.add('active');
  }

  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      performSearch(this.value);
    });

    searchInput.addEventListener('focus', function() {
      if (this.value.trim().length > 0) {
        performSearch(this.value);
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
  }

  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchResults.classList.remove('active');
    }
  });
});
