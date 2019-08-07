/* eslint-disable quotes */
/* eslint-disable strict */

//collapse-------------------------------------------
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
const palettBoxes = document.querySelectorAll(".color-pallet");

const palletBtn = document.querySelectorAll(".js-palett-btn");

// remove existent classes
const removeClasses = () => {
  for (let i = 1; i < visualization.classList.length; i++) {
    visualization.classList.remove(visualization.classList[i]);
  }
};

// add choosed class
const addChoosedClass = event => {
  let selectedPalett = event.currentTarget.id;
  visualization.classList.add(selectedPalett);
};

const checkBtn = () => {
  event.currentTarget.firstElementChild.checked = true;
};

// event function
const changePalett = event => {
  removeClasses();
  addChoosedClass(event);
  checkBtn();
  readRadioForm(event);
  saveLocalStorage();
};

// add event in each palett btn
const handlePalettBtnsClick = function() {
  for (let i = 0; i < palettBoxes.length; i++) {
    palettBoxes[i].addEventListener("click", changePalett);
  }
};

handlePalettBtnsClick(palettBoxes);

//Icons beta -------------------------------------------
// Remove @
function removeAtSymbol(string) {
  return string.replace("@", "");
}
// Email
const email = document.querySelector(".js-link_email");
const emailPlace = document.querySelector(".js-email");
const getEmail = () => {
  if (email.value) {
    emailPlace.innerHTML =
      '<a href="mailto:' +
      email.value +
      '" target="_blank"><i style="opacity:1" class="icon fa fa-envelope js-envelope"></i></a>';
  }
};
email.addEventListener("change", getEmail);

//Phone
const phone = document.querySelector(".js-link_phone");
const phonePlace = document.querySelector(".js-phone");
const getPhone = () => {
  if (phone.value) {
    phonePlace.innerHTML =
      '<a href="tel:+34' +
      phone.value +
      '" target="_blank"><i style="opacity:1" class="icon fa fa-mobile-alt js-envelope"></i></a>';
  }
};
phone.addEventListener("change", getPhone);
//Linkedin
const linkedin = document.querySelector(".js-link_linkedin");
const linkedinPlace = document.querySelector(".js-linkedin");
const getLinkedin = () => {
  const linkedinOK = removeAtSymbol(linkedin.value);
  if (linkedinOK) {
    linkedinPlace.innerHTML =
      '<a href="https://www.linkedin.com/in/' +
      linkedinOK +
      '/" target="_blank"><i style="opacity:1" class="icon fab fa-linkedin-in"></i></a>';
  }
};

linkedin.addEventListener("change", getLinkedin);

const github = document.querySelector(".js-link_github");
const githubPlace = document.querySelector(".js-github");
const getGithub = () => {
  const githubOK = removeAtSymbol(github.value);
  if (githubOK) {
    githubPlace.innerHTML =
      '<a href="https://github.com/' +
      githubOK +
      '" target="_blank"><i style="opacity:1" class="icon fab fa-github-alt"></i></a>';
  }
};
github.addEventListener("change", getGithub);

// form fill on card

// PHOTO --------------------------------
const uploadImage = document.querySelector("#photo");
const miniAvatar = document.querySelector(".data__form__image-thumbnail");
const profileAvatar = document.querySelector(".visualization__user__img");

// const avatarImg = document.createElement("img");
// const profileImg = document.createElement("img");
const fr = new FileReader();

const writeImage = () => {
  if (fr.result) {
    miniAvatar.style.backgroundImage = `url('${fr.result}')`;
    profileAvatar.style.backgroundImage = `url('${fr.result}')`;
    readImageValue(fr.result);
    saveLocalStorage();
  }
  return fr.result;
};

const getImage = () => {
  const myImg = uploadImage.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myImg);
};

uploadImage.addEventListener("change", getImage);

// RESET and CLEAR FORM ---------------------------------
// cogemos el elemento que vamos a escuchar
const inputForm = document.querySelectorAll(".data__form-item");

const dataCard = document.querySelectorAll(".js-visualization-data");

inputAddEvent();

const inputText = ["Nombre Apellido", "Front-end developer"];

const clearForm = () => {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].value = "";
    dataCard[i].innerText = inputText[i];
    removeClasses();
    localStorage.removeItem("objectLocalStor");
  }
};

const resetPreviewColors = () => removeClasses();

const iconsList = [emailPlace, phonePlace, linkedinPlace, githubPlace];

const resetPreviewIcons = () => {
  for (const item of iconsList) {
    item.firstChild.style.opacity = 0.5;
  }
};

const clearPhoto = () => {
  profileAvatar.style.backgroundImage =
    'url("./assets/images/blank-profile.png")';
  miniAvatar.style.backgroundImage = 'url("")';
};

const resetPreview = () => {
  resetPreviewColors();
  clearForm();
  resetPreviewIcons();
  clearPhoto();
};

const btnReset = document.querySelector(".js-reset");

btnReset.addEventListener("click", resetPreview);

//Send DATA to preview
function sendDataCard() {
  for (let i = 0; i < dataCard.length; i++) {
    if (inputForm[i].value === "") {
      dataCard[i].innerText = inputText[i];
    } else {
      dataCard[i].innerHTML = inputForm[i].value;
    }
  }
}

function inputAddEvent() {
  for (let i = 0; i < dataCard.length; i++) {
    inputForm[i].addEventListener("keyup", sendDataCard);
  }
}

// Use LocalStorage

const inputFormRadio = document.querySelectorAll(".js-palett-choose");
/* eslint-disable quotes */

let objectLocalStor = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: ""
};
/* eslint-disable strict */
// Leer valores de texto
function readInputValue() {
  for (let i = 0; i < inputForm.length; i++) {
    objectLocalStor[inputForm[i].name] = inputForm[i].value;
    if (inputForm[i] === phone) {
      objectLocalStor[inputForm[i].name] = "+34 " + inputForm[i].value;
    } else if (inputForm[i] === github) {
      objectLocalStor[inputForm[i].name] = removeAtSymbol(inputForm[i].value);
    }
  }
}
// Leer valor del input (#id vale?)
function readRadioForm(ev) {
  const palletChoose = ev.currentTarget;
  objectLocalStor.palette = parseInt(palletChoose.dataset.value);
}
// Guardar los datos de la imagen

function readImageValue(src) {
  return (objectLocalStor.photo = src);
}
// Handle para leer cambios en el form
function createLocalStorage() {
  readInputValue();
  readImageValue(writeImage());
  saveLocalStorage();
}
const form = document.querySelector(".js-data__input");
form.addEventListener("change", createLocalStorage);

// Save Local Storage
function saveLocalStorage() {
  localStorage.removeItem("objectLocalStor");
  localStorage.setItem("objectLocalStor", JSON.stringify(objectLocalStor));
}

// Cargar info en el formulario
function setLocalStorage() {
  return JSON.parse(localStorage.getItem("objectLocalStor"));
}

function autoFillInput (){

  const savedData = setLocalStorage();
  if (savedData) {
    for (let i = 0; i < inputForm.length; i++) {
      let value = savedData[inputForm[i].name];
      inputForm[i].value = value;
      if (inputForm[i].name === "phone") {
        const phone = savedData.phone.replace("+34 ", "");
        inputForm[i].value = phone;
      }
    }
  }
}
function setRadioValue() {
  const savedData = setLocalStorage();
  if (savedData) {
    for (let i = 0; i < palletBtn.length; i++) {
      if (i === savedData.palette) {
        palletBtn[i - 1].checked = true;
      }
    }
  }
}

function chargeImage() {
  const savedData = setLocalStorage();
  if (savedData) {
    miniAvatar.style.backgroundImage = `url('${savedData.photo}')`;
    profileAvatar.style.backgroundImage = `url('${savedData.photo}')`;
  }
}

function loadLocalStorage() {
  autoFillInput();
  setRadioValue();
  chargeImage();
  getGithub();
  getEmail();
  getLinkedin();
  getPhone();
}
loadLocalStorage();

//  API ---------------------------------------

let buttonShare = document.querySelector(".js-saveLocalStorage");


// objectLocalStor
const responseURL= document.querySelector('.js-response');
const showResultURL= document.querySelector('.share__twitter');
// Twitter //
// const btnTwitter = document.querySelector('.js-btn-twitter');
const twitterURL = document.querySelector('.js-twitter-url');
const tweet = "https://twitter.com/intent/tweet?text=Esta%20es%20la%20tarjeta%20que%20he%20creado%20con%20Awesome%20Profile%20Cards";

function showURL(objectLocalStor) {
  showResultURL.classList.remove("js-hidden");
  if (objectLocalStor.success) {
    responseURL.innerHTML =
      "<a href=" +
      objectLocalStor.cardURL +
      ">" +
      objectLocalStor.cardURL +
      "</a>";
  } else if (objectLocalStor.error) {
    responseURL.innerHTML = "ERROR:" + objectLocalStor.error;
  }
}

function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-c6f0.6f0.coudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}

function createCard(ev) {
  ev.preventDefault();
  sendRequest(objectLocalStor);
  showURL(objectLocalStor);
}

buttonShare.addEventListener("click", createCard);
