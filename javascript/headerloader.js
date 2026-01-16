//I dont understand, JS, I am NOT a fronted dev I am sorry, this is AI//  


fetch("html/navbar.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not load header: " + response.statusText);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // 🔹 Hamburger menu logic MUST be here
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");

    navbarToggle.addEventListener("click", () => {
      navbarToggle.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });

    // 🔹 Optional: highlight current page
    const links = document.querySelectorAll("#header nav a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  })
  .catch(error => {
    console.error(error);
  });
