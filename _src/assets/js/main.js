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

// collapse ---------------------------------------------

// select collapsable section
const designCollapsableArea = document.querySelector(".design.js-collapse");
const dataCollapsableArea = document.querySelector(".data.js-collapse");
const shareCollapsableArea = document.querySelector(".share.js-collapse");

const collapsableAreas = [
  designCollapsableArea,
  dataCollapsableArea,
  shareCollapsableArea
];
// select collpse button
const btnsCollapse = document.querySelectorAll(".js-btn-collapse");

// event function (toggle class hidden)
const makeDesignCollapse = () => {
  designCollapsableArea.classList.toggle("hidden");
};
const makeDataCollapse = () => {
  dataCollapsableArea.classList.toggle("hidden");
};
const makeShareCollapse = () => {
  shareCollapsableArea.classList.toggle("hidden");
};

btnsCollapse[0].addEventListener("click", makeDesignCollapse);
btnsCollapse[1].addEventListener("click", makeDataCollapse);
btnsCollapse[2].addEventListener("click", makeShareCollapse);

// add event in collapse button

// change color -----------------------------------------

// select visualization section
const visualization = document.querySelector(".visualization");

//select palett divs
const palettList = document.querySelector(".js-palett-choose");

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

// add event in palett btn
const handlePalettBtnsClick = function() {
  for (let i = 0; i < palettBtns.length; i++) {
    palettBtns[i].addEventListener("click", changePalett);
  }
};

handlePalettBtnsClick(palettBtns);
