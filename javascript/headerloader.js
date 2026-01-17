
  // This waits for the page to be fully ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-menu");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        // This adds/removes the word "active" to your HTML tags when clicked
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
      });
    }
  });
