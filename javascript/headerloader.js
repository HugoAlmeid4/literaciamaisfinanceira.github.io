//I dont understand, JS, I am NOT a fronted dev I am sorry, this is AI//  


fetch("html/navbar.html") // <-- path updated to folder
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not load header: " + response.statusText);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("header").innerHTML = html;

    // Optional: highlight current page
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
