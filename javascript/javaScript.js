"use strict";
// Čia rašykite savo JS kodą
// const btn = document.querySelector("#btn");
// const infoBlock = document.querySelector(".container");

// btn.addEventListener("click", (e) => {
//   infoBlock.classList.toggle("show-element");
// });

const buttons = document.querySelectorAll(".button");

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");

      let aSide = button.parentNode.firstElementChild;
      let bSide = aSide.nextElementSibling;
      console.log(aSide);
      if (aSide && bSide) {
        aSide.classList.toggle("hidden");
        bSide.classList.toggle("hidden");
      }
    });
  });
}
