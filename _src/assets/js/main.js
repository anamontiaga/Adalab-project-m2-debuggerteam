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

linkedin.addEventListener("change", getLinkedin);

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

// PHOTO --------------------------------
const uploadImage = document.querySelector("#photo");
const miniAvatar = document.querySelector(".data__form__image-thumbnail");
const profileAvatar = document.querySelector(".visualization__user__img");

// const avatarImg = document.createElement("img");
// const profileImg = document.createElement("img");
const fr = new FileReader();

const writeImage = () => {
  miniAvatar.style.backgroundImage = `url('${fr.result}')`;
  profileAvatar.style.backgroundImage = `url('${fr.result}')`;
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
