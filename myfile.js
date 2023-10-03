"use strict";
(function () {
  const buttonEl = document.querySelector("hamburger");
  const menuEl = document.querySelector("menu__list");

  buttonEl.addEventListener("click", function () {
    dropDownMenu.classList.toggle("actvie");
  })
})();