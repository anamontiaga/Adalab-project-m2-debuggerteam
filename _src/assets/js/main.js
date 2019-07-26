"use strict";

console.log("main");

// Acción boton
const startButton = document.querySelector(".layout-page__button");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html#home");
  return getHome;
}

startButton.addEventListener("click", handlerGoHome);
// Focus onclick
debugger;
const getBody = document.querySelector(".layout");

function getFocus() {
  startButton.focus();
}

getBody.addEventListener("click", getFocus);
