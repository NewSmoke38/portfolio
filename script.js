console.log('Blog landing page loaded.');

document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation buttons
  const navButtons = document.querySelectorAll('.navbar-link');
  const contentSections = document.querySelectorAll('.content-section');
  const headerImage = document.getElementById('header-image');

  // Function to activate a section based on route
  function activateSection(route) {
    // Remove active class from all buttons and sections
    navButtons.forEach(btn => btn.classList.remove('active'));
    contentSections.forEach(section => section.classList.remove('active'));

    // Remove body classes
    document.body.classList.remove('thoughts-active', 'projects-active', 'home-active');

    // Determine which section to show based on route
    let targetId = 'home';
    if (route === '/projects') {
      targetId = 'projects';
    } else if (route === '/thoughts') {
      targetId = 'thoughts';
    }

    // Find and activate the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      document.body.classList.add(targetId + '-active');
    }

    // Activate the corresponding nav button
    navButtons.forEach(btn => {
      const href = btn.getAttribute('href');
      if (href === '#' + targetId) {
        btn.classList.add('active');
      }
    });

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
  }

  // Activate section based on current URL path on page load
  const currentPath = window.location.pathname;
  activateSection(currentPath);

  // Add click event listeners to all nav buttons
  navButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target section id from href
      const targetId = this.getAttribute('href').substring(1);
      
      // Determine the route path
      let routePath = '/';
      if (targetId === 'projects') {
        routePath = '/projects';
      } else if (targetId === 'thoughts') {
        routePath = '/thoughts';
      }

      // Update browser URL without reloading
      window.history.pushState({}, '', routePath);

      // Activate the section
      activateSection(routePath);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function () {
    activateSection(window.location.pathname);
  });
}); 