document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.nav-link');
  const allContent = document.querySelectorAll('.content');
  const logo = document.getElementById('logo');
  const menuBtn = document.querySelectorAll('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('#overlay');
  const gnav = document.querySelector('.gnav');
  const menuItems = document.querySelectorAll('.gnav-box-item');
  const menuTab = document.querySelectorAll('.menu-links');

  let lastScrollTop = 0;

  // Hide all content initially
  function hideAllContent() {
    allContent.forEach(div => div.style.display = 'none');
  }

  // Show content based on ID
  function showContentById(id) {
    hideAllContent();
    const targetDiv = document.getElementById(id);

    if (targetDiv) {
      targetDiv.style.display = 'block';
    } else {
      // If no ID matches, show default content ("world")
      const defaultContent = document.getElementById('world');
      if (defaultContent) {
        defaultContent.style.display = 'block';
      }
    }

    // Handle changes for "product" page styling
    if (id === 'product') {
      logo.classList.add('product-logo');
      menuBtn.forEach(btn => btn.classList.add('product-menu'));
    } else {
      logo.classList.remove('product-logo');
      menuBtn.forEach(btn => btn.classList.remove('product-menu'));
    }
  }

  // Get content ID from URL path
  function getContentIdFromUrl() {
    const pathname = window.location.pathname;

    // Adjust the conditions based on your URL structure
    if (pathname.endsWith('/look')) {
      return 'look';
    } else if (pathname.endsWith('/product')) {
      return 'product';
    } else if (pathname === '/' || pathname === '/onegravity/') {
      return 'world'; // Default content for base URL
    } else {
      return 'world'; // Fallback to world content if no match
    }
  }

  function addClassToBodyBasedOnUrl() {
    const pathname = window.location.pathname;
    if (pathname.includes('/about') || pathname.includes('/stockist') || pathname.includes('/news')) {
      document.body.classList.add('other-page'); // Add class if URL matches
      hideMenuTab(); // Hide menu tab if on these pages
    } else {
      document.body.classList.remove('other-page'); // Remove class otherwise
      showMenuTab(); // Show menu tab for other pages
    }
  }

  // Function to hide menu tab
  function hideMenuTab() {
    menuTab.forEach(tab => {
      tab.style.display = 'none'; // Hide menu tab
    });
  }

  // Function to show menu tab
  function showMenuTab() {
    menuTab.forEach(tab => {
      tab.style.display = ''; // Show menu tab (reset display property)
    });
  }

  // Attach click events to links
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const contentId = this.getAttribute('data-target');

      showContentById(contentId);

      // Update the URL without reloading the page
      history.pushState({ id: contentId }, '', this.href);
    });
  });

  // Handle browser navigation (back/forward buttons)
  window.addEventListener('popstate', function (event) {
    const id = event.state ? event.state.id : getContentIdFromUrl();
    showContentById(id || 'world');
    addClassToBodyBasedOnUrl(); // Ensure the menu tab is hidden if needed
  });

  // Load content based on initial URL
  function loadInitialContent() {
    const id = getContentIdFromUrl();
    showContentById(id);
    addClassToBodyBasedOnUrl(); // Ensure the menu tab visibility is set correctly

    // Ensuring default content is shown if none matches
    if (!id) {
      showContentById('world');
    }
  }

  // Call loadInitialContent when DOM is fully loaded
  loadInitialContent();

  // Function to open the menu
  function openMenu() {
    gnav.classList.remove('hide');
    gnav.classList.add('show');
    menuBtn.forEach(btn => btn.classList.add('active'));
    document.body.classList.add('menu-open');
    overlay.classList.add('active');
  }

  // Function to close the menu
  function closeMenu() {
    gnav.classList.remove('show');
    gnav.classList.add('hide');
    menuBtn.forEach(btn => btn.classList.remove('active'));
    document.body.classList.remove('menu-open');
    overlay.classList.remove('active');
  }

  // Toggle menu function based on current state
  function toggleMenu() {
    if (gnav.classList.contains('show')) {
      closeMenu(); // Close the menu
    } else {
      openMenu(); // Open the menu
    }
  }

  // Click event for each menu button
  menuBtn.forEach(btn => {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      toggleMenu();
    });
  });

  // Click event for the close button inside the menu
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default action if button is a link
    closeMenu();
  });

  // Click event for the overlay to close the menu
  overlay.addEventListener('click', function () {
    closeMenu();
  });

  // Click event for each gnav item
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      closeMenu();  // Close the menu when an item is clicked
    });
  });

  // Helper function to check and update the logo's visibility
  function checkLogoVisibility() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > window.innerHeight - 50) {
      if (scrollTop > lastScrollTop) {
        logo.style.top = '-90px';
        logo.style.opacity = '0';
        logo.classList.add('ease-out');
        logo.classList.remove('ease-in');
      } else {
        logo.style.top = 'inherit';
        logo.style.opacity = '1';
        logo.classList.add('ease-in');
        logo.classList.remove('ease-out');
      }
    } else {
      logo.style.opacity = '0';
    }
  }

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (mediaQuery.matches) {
      menuTab.forEach(tab => {
        if (scrollTop !== 0 && scrollTop <= window.innerHeight - 50) {
          tab.classList.add('hide');
          tab.classList.remove('show');
        } else if (scrollTop > window.innerHeight - 50) {
          tab.classList.add('show');
          tab.classList.remove('hide');
        } else {
          tab.classList.remove('hide');
          tab.classList.remove('show');
        }
      });
    } else {
      menuTab.forEach(tab => {
        tab.classList.remove('hide');
        tab.classList.remove('show');
      });
    }

    // Control header sliding up/down
    if (scrollTop > lastScrollTop) {
      // Scrolling down - hide header
      menuBtn.forEach(btn => {
        btn.style.top = '-90px';
        btn.classList.add('ease-out');
        btn.classList.remove('ease-in');
      });
    } else {
      // Scrolling up - show header
      menuBtn.forEach(btn => {
        btn.classList.add('ease-in');
        btn.classList.remove('ease-out');
        btn.style.top = 'inherit';
      });
    }

    // Control logo visibility based on scroll position
    checkLogoVisibility();

    lastScrollTop = scrollTop;
  });

  // Function to remove all classes on window resize
  function removeAllClasses() {
    // Remove classes from logo
    logo.classList.remove('product-logo', 'ease-in', 'ease-out');

    // Remove classes from menu buttons
    menuBtn.forEach(btn => {
      btn.classList.remove('product-menu', 'ease-in', 'ease-out', 'active');
      btn.style.top = 'inherit'; // Reset any inline styles
    });

    // Remove classes from gnav and overlay
    gnav.classList.remove('show', 'hide');
    overlay.classList.remove('active');

    // Remove classes from menu tabs
    menuTab.forEach(tab => {
      tab.classList.remove('show', 'hide');
      tab.style.display = ''; // Reset any inline styles
    });
  }

  // Add event listener for window resize to remove all added classes
  window.addEventListener('resize', removeAllClasses);
});
