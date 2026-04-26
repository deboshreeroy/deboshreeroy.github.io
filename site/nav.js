// Shared nav + footer + scroll-reveal + mobile menu
// (no build step — vanilla JS, GitHub Pages friendly)

(function() {
  const ACTIVE = document.body.dataset.page || '';
  const ROOT = document.body.dataset.root || './';

  const NAV_HTML = `
    <nav>
      <a href="${ROOT}index.html" class="nav-logo">Deboshree Roy<em>.</em></a>
      <ul class="nav-links">
        <li><a href="${ROOT}index.html" data-key="home">About</a></li>
        <li><a href="${ROOT}projects.html" data-key="projects">Projects</a></li>
        <li><a href="${ROOT}experience.html" data-key="experience">Experience</a></li>
        <li><a href="${ROOT}reading.html" data-key="reading">Reading</a></li>
        <li><a href="${ROOT}contact.html" data-key="contact">Contact</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      <a href="${ROOT}index.html">About</a>
      <a href="${ROOT}projects.html">Projects</a>
      <a href="${ROOT}experience.html">Experience</a>
      <a href="${ROOT}reading.html">Reading</a>
      <a href="${ROOT}contact.html">Contact</a>
    </div>
  `;

  const FOOTER_HTML = `
    <footer>
      <p>Deboshree Roy · ${new Date().getFullYear()}</p>
      <div class="footer-links">
        <a href="mailto:hello.deboshreeroy@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/deboshreeroy10/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/deboshreeroy" target="_blank" rel="noopener">GitHub</a>
      </div>
    </footer>
  `;

  // Inject
  const navMount = document.getElementById('nav-mount');
  if (navMount) navMount.innerHTML = NAV_HTML;
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;

  // Active link
  if (ACTIVE) {
    document.querySelectorAll(`.nav-links a[data-key="${ACTIVE}"]`).forEach(a => a.classList.add('active'));
  }

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }));
  }

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
