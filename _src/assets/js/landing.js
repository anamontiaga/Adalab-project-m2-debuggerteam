"use strict";

console.log("landing");

//Acción boton
const startButton = document.querySelector(".layout-page__button");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html#home");
  return getHome;
}

startButton.addEventListener("click", handlerGoHome);

// Focus onclick
const getBody = document.querySelector(".layout");

function getFocus() {
  startButton.focus();
}

getBody.addEventListener("click", getFocus);
