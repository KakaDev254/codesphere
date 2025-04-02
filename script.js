function toggleMenu() {
  let menu = document.querySelector(".floating-menu");
  let toggleBtn = document.getElementById("toggleBtn").querySelector("i");

  menu.classList.toggle("show");

  // Toggle between chat icon and close (X) icon
  if (menu.classList.contains("show")) {
    toggleBtn.classList.replace("bx-message-detail", "bx-x");
  } else {
    toggleBtn.classList.replace("bx-x", "bx-message-detail");
  }
}
