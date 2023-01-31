// Select DOM Items
const menuBtn = qs('.menu-btn'); // Probably .menu-btn
const menu = qs('.menu');
const menuNav = qs('.menu-nav');
const menuBranding = qs('.menu-branding');
const navItems = qsa('.nav-item');

// Helper functions
// QuerySelector
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// QuerySelectorAll
function qsa(selectors, parent = document) {
  return parent.querySelectorAll(selectors);
}

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}
