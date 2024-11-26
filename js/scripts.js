// Function to toggle the menu
function toggleMenu() {
  // Select the menu element by its class name
  const menu = document.querySelector('.menu');

  // Check if the menu already has the 'hidden' class
  if (menu.classList.contains('hidden')) {
    // Remove the 'hidden' class to show the menu
    menu.classList.remove('hidden');
    menu.classList.add('active');
  } else {
    // Add the 'hidden' class to hide the menu
    menu.classList.add('hidden');
    menu.classList.remove('active');
  }
}

// Attach an event listener to the menu icon
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu);

  