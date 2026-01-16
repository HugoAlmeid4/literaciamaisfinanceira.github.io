//I dont understand, JS, I am NOT a fronted dev I am sorry, this is AI//  
  
  
  const search = document.getElementById("search");
  const list = document.getElementById("pdf-list").getElementsByTagName("li");

  search.addEventListener("keyup", function () {
    const text = this.value.toLowerCase();

    for (let i = 0; i < list.length; i++) {
      const item = list[i].innerText.toLowerCase();
      list[i].style.display = item.includes(text) ? "" : "none";
    }
  });