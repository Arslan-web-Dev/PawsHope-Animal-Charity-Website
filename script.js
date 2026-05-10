/* =============================================
   PAWSHOPE — Vanilla JavaScript
   ============================================= */

'use strict';

// ─── PAGE LOADER ───────────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 1200);
});

// ─── THEME TOGGLE ──────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('pawshope-theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('pawshope-theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ─── NAVBAR ────────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ─── SCROLL PROGRESS ───────────────────────────
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / total) * 100;
  scrollProgress.style.width = progress + '%';
});

// ─── BACK TO TOP ───────────────────────────────
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── TYPING TEXT ───────────────────────────────
const typingEl = document.getElementById('typing-text');
const words = ['Love & Care', 'Safety & Hope', 'A Second Chance', 'Your Compassion'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 120;
  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }
  setTimeout(type, speed);
}
setTimeout(type, 1800);

// ─── SCROLL REVEAL ─────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));

// ─── ANIMATED COUNTERS ─────────────────────────
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const update = () => {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString();
    }
  };
  requestAnimationFrame(update);
}

// ─── PROGRESS BAR ──────────────────────────────
const progressBar = document.getElementById('progress-bar');

if (progressBar) {
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          progressBar.style.width = progressBar.getAttribute('data-width') + '%';
        }, 400);
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  progressObserver.observe(progressBar);
}

// ─── DONATION CARDS ────────────────────────────
const donateCards = document.querySelectorAll('.donate-card');
const dAmount = document.getElementById('d-amount');

donateCards.forEach(card => {
  card.addEventListener('click', () => {
    donateCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const amt = card.getAttribute('data-amount');
    if (dAmount) dAmount.value = '$' + amt;
  });
});

// ─── LIVE DONATION TICKER ──────────────────────
const ticker = document.getElementById('ticker');
const donations = [
  '🎉 Ahmed K. donated $50 — "Keep up the amazing work!"',
  '❤️ Sarah M. donated $25 — "For the rescued kittens!"',
  '🐾 John D. donated $100 — "In memory of my dog Rocky"',
  '🌟 Fatima A. donated $200 — "These animals deserve love!"',
  '💛 Mike R. donated $10 — "Small amount, big heart!"',
  '🏆 Emma L. donated $500 — "Monthly donor, keep rescuing!"',
  '🐕 Omar S. donated $75 — "For the shelter expansion!"',
  '🐱 Priya N. donated $30 — "Love your adoption program!"',
];

if (ticker) {
  ticker.textContent = donations.join('  ·  ');
}

// ─── FAQ ACCORDION ─────────────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    if (!isOpen) item.classList.add('open');
  });
});

// ─── TESTIMONIAL SLIDER ────────────────────────
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('slider-dots');
let currentSlide = 0;
let autoSlideInterval;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', 'Slide ' + (i + 1));
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById('prev-slide')?.addEventListener('click', () => {
  stopAutoSlide();
  goToSlide(currentSlide - 1);
  startAutoSlide();
});

document.getElementById('next-slide')?.addEventListener('click', () => {
  stopAutoSlide();
  goToSlide(currentSlide + 1);
  startAutoSlide();
});

startAutoSlide();

// ─── GALLERY LIGHTBOX ──────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbClose = document.getElementById('lb-close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.querySelector('img').src;
    const alt = item.querySelector('img').alt;
    lbImg.src = src;
    lbImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lbClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── FAVOURITE BUTTON ──────────────────────────
document.querySelectorAll('.fav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '❤️' : '🤍';
  });
});

// ─── VOLUNTEER FORM VALIDATION ─────────────────
const volForm = document.getElementById('vol-form');

if (volForm) {
  volForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'v-name', errId: 'v-name-err', msg: 'Please enter your full name.', pattern: /^.{2,}$/ },
      { id: 'v-email', errId: 'v-email-err', msg: 'Please enter a valid email.', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: 'v-phone', errId: 'v-phone-err', msg: 'Please enter a valid phone number.', pattern: /^\+?[\d\s\-]{7,}$/ },
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const err = document.getElementById(f.errId);
      if (!f.pattern.test(input.value.trim())) {
        err.textContent = f.msg;
        input.style.borderColor = '#e53e3e';
        valid = false;
      } else {
        err.textContent = '';
        input.style.borderColor = '';
      }
    });

    if (valid) {
      const success = document.getElementById('vol-success');
      success.style.display = 'block';
      volForm.reset();
      setTimeout(() => success.style.display = 'none', 5000);
    }
  });
}

// ─── CONTACT FORM ──────────────────────────────
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('contact-success');
    success.style.display = 'block';
    contactForm.reset();
    setTimeout(() => success.style.display = 'none', 5000);
  });
}

// ─── DONATE FORM ───────────────────────────────
const donateForm = document.getElementById('donate-form');

if (donateForm) {
  donateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = donateForm.querySelector('button[type="submit"]');
    btn.textContent = '✅ Thank you for your donation!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    setTimeout(() => {
      btn.textContent = '❤️ Donate Now';
      btn.style.background = '';
      donateForm.reset();
    }, 3000);
  });
}

// ─── NAVBAR ACTIVE LINK ────────────────────────
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = 'var(--orange)';
      } else {
        link.style.color = '';
      }
    }
  });
}, { passive: true });

// ─── BUTTON RIPPLE ─────────────────────────────
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;
      width:4px;height:4px;
      border-radius:50%;
      background:rgba(255,255,255,0.4);
      transform:scale(0);
      animation:rippleAnim 0.6s ease-out forwards;
      left:${e.offsetX}px;
      top:${e.offsetY}px;
      pointer-events:none;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
@keyframes rippleAnim {
  to { transform: scale(60); opacity: 0; }
}
`;
document.head.appendChild(rippleStyle);

// ─── PARALLAX ─────────────────────────────────
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
  }
}, { passive: true });

// ─── MOUSE PARALLAX (Hero blobs) ───────────────
document.getElementById('hero')?.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelector('.blob-1').style.transform = `translate(${x}px, ${y}px)`;
  document.querySelector('.blob-2').style.transform = `translate(${-x * 0.6}px, ${-y * 0.6}px)`;
});

// ─── STAGGER CARD DELAYS ──────────────────────
document.querySelectorAll('.programs-grid .program-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 80) + 'ms';
});
document.querySelectorAll('.animals-grid .animal-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 100) + 'ms';
});
document.querySelectorAll('.hero-stats .stat-card').forEach((card, i) => {
  card.style.animationDelay = (i * 0.4) + 's';
});

// ─── SMOOTH ANCHOR SCROLLING ──────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('%c🐾 PawsHope — Made with love for animals.', 'color:#ff7a00;font-size:1.2rem;font-weight:bold;');
