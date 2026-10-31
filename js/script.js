// ==========================================
// DringDong – main script
// ==========================================

// 1. Footer year auto update
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Header shadow when page is scrolled
var header = document.querySelector('.site-header');
window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// 3. Close mobile menu after clicking a link
var menu = document.getElementById('mainMenu');
document.querySelectorAll('#mainMenu a').forEach(function (link) {
  link.addEventListener('click', function () {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// 4. Smooth scroll (header height ka offset ke saath)
document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var id = link.getAttribute('href').split('#')[1];
    var target = document.getElementById(id);
    if (target) {                       // same page par hi scroll karo
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

// 5. Fade-in animation on scroll
var items = document.querySelectorAll('.feature-card, .quote-text, .cta-box');
items.forEach(function (el) { el.classList.add('reveal'); });
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
items.forEach(function (el) { observer.observe(el); });
