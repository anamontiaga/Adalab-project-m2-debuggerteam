"use strict";

const startButton = document.querySelector(".layout-page__button");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html#home");
  return getHome;
}

startButton.addEventListener("click", handlerGoHome);

debugger;
const getBody = document.querySelector(".layout");

function focusButton() {
  const activeButton = startButton.focus();
  return true;
}

getBody.addEventListener("click", focusButton);
