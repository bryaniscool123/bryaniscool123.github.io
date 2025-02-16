const h1 = document.querySelector('h1');

setTimeout(() => {
  h1.classList.add('show');
}, 500);


// Get a reference to the element you want to animate
const element = document.querySelector('.animate-element');

// Add an event listener to the window to detect when the user scrolls
window.addEventListener('scroll', () => {
  // Get the position of the window and the position of the element
  const windowPosition = window.scrollY;
  const elementPosition = element.offsetTop;

  // Check if the window is scrolled past the element
  if (windowPosition >= elementPosition) {
    // Add a CSS class to the element to start the animation
    element.classList.add('animate');
  }
});




function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex';
}


function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'none';
}


