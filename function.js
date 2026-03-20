
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
  // ── NAV SCROLL ──
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  });

  // ── MOBILE MENU ──
  function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // ── BOOKING FIELD UPDATE ──
  function updateField(id, val) {
    if (!val) return;
    const d = new Date(val + 'T00:00:00');
    const opts = { day: 'numeric', month: 'short', year: 'numeric' };
    document.getElementById(id).textContent = d.toLocaleDateString('en-GB', opts);
  }

  // ── MODAL ──
  function openModal() {
    document.getElementById('bookingModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('bookingModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeModalOutside(e) {
    if (e.target === document.getElementById('bookingModal')) closeModal();
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── TOAST ──
  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
  }

  // ── SUBMIT BOOKING ──
  function submitBooking() {
    closeModal();
    showToast('✅ Reservation request sent! We\'ll confirm within 2 hours.');
  }

  // ── SUBSCRIBE ──
  function handleSubscribe() {
    const val = document.getElementById('emailInput').value.trim();
    if (!val || !val.includes('@')) {
      showToast('⚠️ Please enter a valid email address.');
      return;
    }
    document.getElementById('emailInput').value = '';
    showToast('🎉 Welcome to the inner circle!');
  }

  // ── INTERSECTION OBSERVER — fade in sections ──
  const fadeEls = document.querySelectorAll('section, .booking-bar, .experience, .gallery, .location');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.08 });

  fadeEls.forEach(el => {
    if (!el.classList.contains('hero')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      obs.observe(el);
    }
  });