/* ============================================
   THE CRAFTY CLUB SOCIAL
   Shared JavaScript
   ============================================ */

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('.site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Signup form handler (placeholder — hook up to real backend)
function handleSignup(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const email = input.value;
  const btn = e.target.querySelector('button');

  // TODO: Send to your email service (Mailchimp, ConvertKit, Cloudflare Worker, etc.)
  console.log('Signup:', email);

  btn.textContent = "You're on the list! 🎉";
  btn.style.background = 'var(--terracotta)';
  input.value = '';

  setTimeout(() => {
    btn.textContent = 'Count me in';
    btn.style.background = '';
  }, 3000);
}

// Contact form handler (placeholder)
function handleContact(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // TODO: Send to your backend / Cloudflare Worker
  console.log('Contact:', data);

  const btn = e.target.querySelector('button');
  btn.textContent = "Message sent! 💌";
  btn.style.background = 'var(--terracotta)';
  e.target.reset();

  setTimeout(() => {
    btn.textContent = 'Send message';
    btn.style.background = '';
  }, 3000);
}

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
