document.addEventListener('DOMContentLoaded', () => {
  const marker = document.getElementById('marker');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section.section');
  const progressbar = document.getElementById('progressbar');

  function setMarkerPosition(link) {
    if (!link || window.innerWidth <= 820) return;
    marker.style.left = link.offsetLeft + 'px';
    marker.style.top = link.offsetTop + 'px';
    marker.style.width = link.offsetWidth + 'px';
    marker.style.height = link.offsetHeight + 'px';
  }

  function showSection(hash) {
    sections.forEach(section => {
      section.classList.toggle('is-active', '#' + section.id === hash);
    });
  }

  showSection(location.hash || '#home');
  const activeLink = document.querySelector(`.nav-link[href="${location.hash || '#home'}"]`) || navLinks[0];
  navLinks.forEach(l => l.classList.remove('active'));
  activeLink.classList.add('active');

  // Snap into place on first paint (no slide-in from the marker's unset default position)
  marker.style.transition = 'none';
  setMarkerPosition(activeLink);
  requestAnimationFrame(() => { marker.style.transition = ''; });

  // Re-sync once web fonts finish loading (text reflow shifts link widths)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      setMarkerPosition(document.querySelector('.nav-link.active') || navLinks[0]);
    });
  }
  window.addEventListener('load', () => {
    setMarkerPosition(document.querySelector('.nav-link.active') || navLinks[0]);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const hash = link.getAttribute('href');

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      showSection(hash);
      setMarkerPosition(link);
      history.replaceState(null, '', hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  window.addEventListener('resize', () => {
    const current = document.querySelector('.nav-link.active') || navLinks[0];
    setMarkerPosition(current);
  });

  // Section CTA buttons
  const projectsBtn = document.getElementById('projects-btn');
  if (projectsBtn) projectsBtn.addEventListener('click', () => window.location.href = 'projects/index.html');

  const achievementsBtn = document.getElementById('achievements-btn');
  if (achievementsBtn) achievementsBtn.addEventListener('click', () => window.location.href = 'achievements/certificates.html');

  const achievementsBtn1 = document.getElementById('achievements-btn1');
  if (achievementsBtn1) achievementsBtn1.addEventListener('click', () => window.location.href = 'achievements/snaps.html');

  // Vertical scroll progress bar
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressbar.style.height = percent + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
});
