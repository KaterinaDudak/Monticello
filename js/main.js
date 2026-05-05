"use strict";

// ------ BURGER MENU-----------

const burger = document.querySelector(".burger_img");
const navMenu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("action");
  navMenu.classList.toggle("visible");
});


// -------- SCROLLL --------------------

document.body.addEventListener("click", (e) => {
  if (e.target.hasAttribute("href")) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    console.log(targetId);

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }

    if (burger.classList.contains("action")) {
      burger.classList.remove("action");
      navMenu.classList.remove("visible");
    }
  }
});








