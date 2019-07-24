"use strict";

const startButton = document.querySelector(".layout-page__button");

function handlerGoHome() {
  const getHome = (window.location.href = "home.html#home");
  return getHome;
}

startButton.addEventListener("click", handlerGoHome);
