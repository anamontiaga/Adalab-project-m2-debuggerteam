"use strict";

// Acción boton
const startButton = document.querySelector(".layout-page__button");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html#home");
  return getHome;
}

// startButton.addEventListener("click", handlerGoHome);

// Focus onclick
const getBody = document.querySelector(".layout");

function getFocus() {
  startButton.focus();
}

// getBody.addEventListener("click", getFocus);

// collapse --------------------------------------------

// select collapsable section
const collapse = document.querySelector(".js-collapse");

// select collpse button
const btnCollapse = document.querySelector(".btn-collapse");

// event function (toggle class hidden)
const makeCollapse = () => collapse.classList.toggle("hidden");

// add event in collapse button
btnCollapse.addEventListener("click", makeCollapse);

// change color -----------------------------------------

// select visualization section
const visualization = document.querySelector(".visualization");

//select palett divs
const palettList = document.querySelector(".js-palett-choose");

// remove existent classes
const removeClasses = () => {
  for (let i = 1; i < visualization.classList.length; i++) {
    visualization.classList.remove(visualization.classList[i]);
  }
};

// add choosed class
const addChoosedClass = () => {
  let selectedPalett = event.target.id;
  visualization.classList.add(selectedPalett);
};

// event function
const changePalett = () => {
  removeClasses();
  addChoosedClass();
};

// add event in pallet divs
palettList.addEventListener("click", changePalett);
