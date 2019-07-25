"use strict";
// // Acción boton
// const startButton = document.querySelector(".layout-page__button");

// function handlerGoHome() {
//   const getHome = (window.location.href = "home.html#home");
//   return getHome;
// }

// startButton.addEventListener("click", handlerGoHome);
// // Focus onclick
// debugger;
// const getBody = document.querySelector(".layout");

// function getFocus() {
//   startButton.focus();
// }

// getBody.addEventListener("click", getFocus);

// collapse

const collapse = document.querySelector(".js-collapse");
const btnCollapse = document.querySelector(".btn-collapse");

const makeCollapse = () => collapse.classList.toggle("hidden");

btnCollapse.addEventListener("click", makeCollapse);
