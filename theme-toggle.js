// theme-toggle.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('bd-theme');
    const themeToggleBtns = document.querySelectorAll('[data-bs-theme-value]');
    const storedTheme = localStorage.getItem('theme') || 'auto';
  
    const setTheme = function (theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
  
      themeToggleBtns.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
  
      const activeBtn = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-pressed', 'true');
      }
  
      localStorage.setItem('theme', theme);
    };
  
    setTheme(storedTheme);
  
    themeToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-bs-theme-value');
        setTheme(theme);
      });
    });
  });
  