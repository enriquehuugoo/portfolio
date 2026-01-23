import './style.css';
import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Language Toggle Logic
  const langBtn = document.getElementById('lang-toggle');
  let currentLang = 'en';

  const updateLanguage = (lang) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  };

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateLanguage(currentLang);
  });

  // Scroll Animation Logic
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));
});
