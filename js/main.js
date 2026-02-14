/* ============================================
   THE CRAFTY CLUB SOCIAL
   Shared JavaScript
   ============================================ */

// Force scroll to top on page load (prevents browser restoring mid-page position)
if (!window.location.hash) {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
}

// Scroll animations — CSS handles stagger via transition-delay on nth-child
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('.site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Mobile nav toggle — hamburger opens tile overlay
const navToggle = document.querySelector('.nav-toggle');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');

if (navToggle && mobileOverlay) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileOverlay.classList.contains('open');
    navToggle.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close overlay when a nav tile is tapped
  mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Signup form — submits to Google Forms via hidden iframe
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', () => {
    const btn = signupForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = "You're on the list!";
    btn.style.background = 'var(--red)';
    signupForm.reset();
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  });
}

// RSVP form — submits to Google Forms, shows confirmation
const rsvpForm = document.getElementById('rsvp-form');
const rsvpConfirm = document.getElementById('rsvp-confirm');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', () => {
    if (rsvpConfirm) {
      // Events page — handwritten typewriter confirmation
      rsvpConfirm.classList.remove('show');
      void rsvpConfirm.offsetWidth;
      setTimeout(() => rsvpConfirm.classList.add('show'), 200);
      setTimeout(() => {
        rsvpConfirm.classList.remove('show');
        rsvpForm.reset();
      }, 4000);
    } else {
      // Signup page — button text swap
      const btn = rsvpForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = "See you there!";
      btn.style.background = 'var(--red)';
      rsvpForm.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    }
  });
}

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
