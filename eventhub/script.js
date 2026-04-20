/* ===== EventHub JS: nav toggle, countdown, form validation ===== */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const menu = document.querySelector('.nav-menu');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));

  // Countdown timer
  const cd = document.getElementById('countdown');
  if (cd) {
    const target = new Date(cd.dataset.target).getTime();
    const tick = () => {
      const now = Date.now();
      let diff = target - now;
      if (diff < 0) diff = 0;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent = String(v).padStart(2,'0'); };
      set('days',d); set('hours',h); set('minutes',m); set('seconds',s);
    };
    tick(); setInterval(tick, 1000);
  }

  // Pre-fill event from URL (?event=Tech%20Fest)
  const params = new URLSearchParams(window.location.search);
  const evParam = params.get('event');
  const evSelect = document.getElementById('event');
  if (evParam && evSelect) {
    [...evSelect.options].forEach(o => { if (o.value === evParam) o.selected = true; });
  }

  // Form validation
  const form = document.getElementById('registerForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const event = form.event.value;
      const err = document.getElementById('formError');
      err.textContent = '';

      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRx = /^[6-9]\d{9}$/;

      if (name.length < 2) return fail('Please enter your full name.');
      if (!emailRx.test(email)) return fail('Please enter a valid email address.');
      if (!phoneRx.test(phone)) return fail('Enter a valid 10-digit Indian mobile number.');
      if (!event) return fail('Please select an event.');

      function fail(msg){ e.preventDefault(); err.textContent = msg; }
    });
  }
});
