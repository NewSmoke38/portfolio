console.log('Blog landing page loaded.');

document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation buttons
  const navButtons = document.querySelectorAll('.navbar-link');
  const contentSections = document.querySelectorAll('.content-section');
  const headerImage = document.getElementById('header-image');

  // Add click event listeners to all nav buttons
  navButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all buttons and sections
      navButtons.forEach(btn => btn.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      // Remove body classes
      document.body.classList.remove('thoughts-active', 'projects-active', 'home-active');

      // Add active class to clicked button
      this.classList.add('active');

      // Get the target section id from href
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Show the target section
      if (targetSection) {
        targetSection.classList.add('active');
        // Add body class for CSS targeting
        document.body.classList.add(targetId + '-active');
      }

      // Change header image based on section
      if (targetId === 'thoughts') {
        headerImage.src = 'thoughts.png';
        headerImage.alt = 'Thoughts Header Image';
      } else if (targetId === 'projects') {
        // Header image is hidden via CSS for projects page
      } else {
        headerImage.src = 'pic.png';
        headerImage.alt = 'Header Image';
      }
    });
  });
}); 