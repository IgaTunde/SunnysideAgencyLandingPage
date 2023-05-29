// Get the elements
const menuToggle = document.querySelector('.fa-bars');
const navMenu = document.querySelector('ul');

// Add click event listener to toggle the menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
