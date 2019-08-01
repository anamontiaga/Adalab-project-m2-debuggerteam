/* eslint-disable quotes */
/* eslint-disable strict */
// reset btn --------------------------------------------
// const mainForm = document.querySelector(".main__form");
// const defaultForm = document.querySelector(".js-visualization-data");
// const btnReset = document.querySelector(".js-reset");

// const clearForm = ev => {
//   ev.stopBubbling();
//   ev.preventDefault();
//   mainForm.reset();
//   visualizationForm.reset();
// };

// btnReset.addEventListener("click", clearForm);
// collapse ---------------------------------------------

// select collpse button
const btnsCollapse = document.querySelectorAll(".js-btn-collapse");

// event function (toggle class hidden)
const makeCollapse = event => {
  event.preventDefault();
  if (
    event.currentTarget &&
    event.currentTarget.parentElement &&
    event.currentTarget.parentElement.parentElement
  ) {
    event.currentTarget.parentElement.parentElement.classList.toggle("hidden");
  }
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
//Icons beta
// Remove @
function checkUserName(string) {
  return string.replace("@", "");
}
// Email
const email = document.querySelector(".js-link_email");
const emailPlace = document.querySelector(".js-email");
const getEmail = () => {
  emailPlace.innerHTML =
    '<a href="mailto:' +
    email.value +
    '" target="_blank"><i style="opacity:1" class="icon fa fa-envelope js-envelope"></i></a>';
};
email.addEventListener("change", getEmail);
debugger;
//Phone
const phone = document.querySelector(".js-link_phone");
const phonePlace = document.querySelector(".js-phone");
const getPhone = () => {
  phonePlace.innerHTML =
    '<a href="tel:+34' +
    phone.value +
    '" target="_blank"><i style="opacity:1" class="icon fa fa-mobile-alt js-envelope"></i></a>';
};
phone.addEventListener("change", getPhone);
//Linkedin
const linkedin = document.querySelector(".js-link_linkedin");
const linkedinPlace = document.querySelector(".js-linkedin");
const getLinkedin = () => {
  const linkedinOK = checkUserName(linkedin.value);
  linkedinPlace.innerHTML =
    '<a href="https://www.linkedin.com/in/' +
    linkedinOK +
    '/" target="_blank"><i style="opacity:1" class="icon fab fa-linkedin-in"></i></a>';
};
debugger;
linkedin.addEventListener("change", getLinkedin);
debugger;
const github = document.querySelector(".js-link_github");
const githubPlace = document.querySelector(".js-github");
const getGithub = () => {
  const githubOK = checkUserName(github.value);
  githubPlace.innerHTML =
    '<a href="https://github.com/' +
    githubOK +
    '" target="_blank"><i style="opacity:1" class="icon fab fa-github-alt"></i></a>';
};
github.addEventListener("change", getGithub);

// form fill on card

// cogemos el elemento que vamos a escuchar
const inputForm = document.querySelectorAll(".data__form-item");

const dataCard = document.querySelectorAll(".js-visualization-data");

function sendDataCard() {
  for (let i = 0; i < dataCard.length; i++) {
    dataCard[i].innerHTML = inputForm[i].value;
  }
}

function inputAddEvent() {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].addEventListener("keyup", sendDataCard);
  }
}

inputAddEvent();

const inputText = ["Nombre Apellido", "Front-end developer"];
const clearForm = () => {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].value = "";
    dataCard[i].innerText = inputText[i];
  }
};

const btnReset = document.querySelector(".js-reset");

btnReset.addEventListener("click", clearForm);
// Use LocalStorage
const form = document.querySelector(".form__data");
const setLocalStorage = () => {};
