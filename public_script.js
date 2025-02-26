document.addEventListener('DOMContentLoaded', () => {
  // Initialize charts and map using Chart.js and Leaflet.
  // (These will be rendered via React components in this app.)
  console.log('DOM fully loaded – additional vanilla JS functionality can go here.');

  // Navigation toggle for non-React parts (if needed)
  const navItems = document.querySelectorAll('.sidebar nav li');
  const sections = document.querySelectorAll('.section');

  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navItems.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');

      sections.forEach((sec) => sec.classList.remove('active'));
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId)?.classList.add('active');
    });
  });

  // Additional functions such as keyword search & blog generation can be enhanced here.
});