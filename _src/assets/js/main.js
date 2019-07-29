/* eslint-disable quotes */
/* eslint-disable strict */
// collapse ---------------------------------------------
const mainForm = document.querySelector(".main__form");
const visualizationForm = document.querySelector(".js-visualizationReset");
const btnReset = document.querySelector(".js-reset");

const clearForm = ev => {
  ev.stopBubbling();
  ev.preventDefault();
  mainForm.reset();
  visualizationForm.reset();
};

btnReset.addEventListener("click", clearForm);

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

// form fill on card

// cogemos el elemento que vamos a escuchar
const inputForm = document.querySelectorAll(".data__form-item");

const dataCard = document.querySelectorAll(".js-visualization-data");

function sendDataCard() {
  for (let i = 0; i < dataCard.length; i++) {
    dataCard[i].innerHTML = inputForm[i].value;
  }
}

function addEvent() {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].addEventListener("keyup", sendDataCard);
  }
}

addEvent();
