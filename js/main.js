// ── TERMINAL BOOT INTRO ──
    (function() {
      const overlay = document.getElementById('boot-overlay');
      const lineEl = document.getElementById('boot-line');
      const skipBtn = document.getElementById('boot-skip');
      let finished = false;

      const bootLines = [
        {t: 'colby@portfolio:~$ ', cls: 'bt-prompt'},
        {t: 'whoami\n', cls: 'bt-out'},
        {t: 'Colby Nieva\n', cls: 'bt-out'},
        {t: 'colby@portfolio:~$ ', cls: 'bt-prompt'},
        {t: 'ls projects/\n', cls: 'bt-out'},
        {t: 'usertrace  breachwatch  password-analyzer\n', cls: 'bt-gold', fast: true},
        {t: 'colby@portfolio:~$ ', cls: 'bt-prompt'},
        {t: 'cat status.txt\n', cls: 'bt-out'},
        {t: '[ OPEN TO WORK ] — launching portfolio...', cls: 'bt-gold'}
      ];

      let idx = 0, ch = 0, html = '';
      let timer = null;

      function step() {
        if (finished) return;
        if (idx >= bootLines.length) {
          lineEl.innerHTML = html + '<span class="bt-cursor"></span>';
          setTimeout(finish, 700);
          return;
        }
        const line = bootLines[idx];
        if (ch < line.t.length) {
          const c = line.t[ch];
          html += c === '\n' ? '<br>' : `<span class="${line.cls}">${c.replace('<','&lt;').replace('>','&gt;')}</span>`;
          ch++;
          lineEl.innerHTML = html + '<span class="bt-cursor"></span>';
          timer = setTimeout(step, c === '\n' ? 160 : (line.fast ? 18 : 32));
        } else {
          idx++; ch = 0;
          timer = setTimeout(step, 110);
        }
      }

      function finish() {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        overlay.classList.add('boot-done');
        document.body.style.overflow = '';
        setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 700);
      }

      skipBtn.addEventListener('click', finish);
      document.body.style.overflow = 'hidden';
      setTimeout(step, 400);
    })();

    // ── SCROLL FADE-UP ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i * 0.06) + 's';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ── SECTION TITLE SHIMMER ON SCROLL ──
    const shimmerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shimmer-play');
          shimmerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.section-title').forEach(el => shimmerObserver.observe(el));

    // ── SCROLL PROGRESS BAR ──
    const progressBar = document.getElementById('nav-progress');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrollTop / docHeight * 100) + '%';
      document.querySelector('nav').classList.toggle('nav-scrolled', scrollTop > 20);
    });

    // ── TYPING ANIMATION ──
    const phrases = ['Cybersecurity Graduate', 'Security Tools Developer', 'OSINT Researcher', 'Open to New Opportunities'];
    let phraseIdx = 0, charIdx = 0, deleting = false;
    const typingEl = document.getElementById('typing-text');
    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        typingEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
      } else {
        typingEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      }
      setTimeout(type, deleting ? 45 : 80);
    }
    setTimeout(type, 1000);

    // ── PARTICLE BACKGROUND ──
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

    function initParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1
        });
      }
    }
    initParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,151,90,${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184,151,90,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();

    // ── SCROLL TO TOP ──
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });