"use strict";

// Acción boton
// const startButton = document.querySelector(".layout-page__button");

// function handlerGoHome() {
//   const getHome = (window.location.href = "home.html#home");
//   return getHome;
// }

// startButton.addEventListener("click", handlerGoHome);

// // Focus onclick
// const getBody = document.querySelector(".layout");

// function getFocus() {
//   startButton.focus();
// }

// getBody.addEventListener("click", getFocus);

// collapse ---------------------------------------------

// select collpse button
const btnsCollapse = document.querySelectorAll(".js-btn-collapse");

// event function (toggle class hidden)
const makeCollapse = event => {
  event.currentTarget.parentElement.parentElement.classList.toggle("hidden");
};

for (let i = 0; i < btnsCollapse.length; i++) {
  btnsCollapse[i].addEventListener("click", makeCollapse);
}

// change color -----------------------------------------

// select visualization section
const visualization = document.querySelector(".visualization");

// select pallet list buttons
const palettBtns = document.querySelectorAll(".js-palett-btn");

// remove existent classes
const removeClasses = () => {
  for (let i = 1; i < visualization.classList.length; i++) {
    visualization.classList.remove(visualization.classList[i]);
  }
};

// add choosed class
const addChoosedClass = event => {
  let selectedPalett = event.target.id;
  visualization.classList.add(selectedPalett);
};

// event function
const changePalett = event => {
  removeClasses();
  addChoosedClass(event);
};

// add event in each palett btn
const handlePalettBtnsClick = function() {
  for (let i = 0; i < palettBtns.length; i++) {
    palettBtns[i].addEventListener("click", changePalett);
  }
};

handlePalettBtnsClick(palettBtns);
