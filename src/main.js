// INPUTS:
var userIdeas = [];
var titleInput = document.querySelector(".text-input");
var bodyInput = document.querySelector(".body-input");
// BUTTONS:
var saveButton = document.querySelector(".save-button");
var searchButton = document.querySelector(".search-img");
var menuButton = document.querySelector(".open-nav-image");
var showStarredIdeasButton = document.querySelector(".show-starred-button");
var closeNavViewButton = document.querySelector(".close-nav-view");
// var commentButton = document.querySelector(".add-comment")

// EVENT LISTENERS:

saveButton.addEventListener("click", createNewIdeaCard);
// titleInput.addEventListener("keydown", enableSaveButton);
bodyInput.addEventListener("keydown", enableSaveButton);

// FUNCTIONS:
function createNewIdeaCard(event) {
  event.preventDefault()
  var storedIdea = instantiateIdea();
  storeCurrentIdea(storedIdea);
  console.log(userIdeas);
  disableSaveButton();
  clearInputFields();
}

function instantiateIdea() {
  var userTitle = titleInput.value
  var userBody = bodyInput.innerText
  var currentIdea = new Idea(userTitle, userBody)
  return currentIdea;
}

function storeCurrentIdea(storedIdea) {
  userIdeas.unshift(storedIdea);
}

function enableSaveButton() {
  if(titleInput.length !== 0 && bodyInput.length !== 0) {
    saveButton.style.opacity = 1;
    saveButton.disabled = false;
  } else {
    disableSaveButton();
  }
}

function disableSaveButton(){
  saveButton.style.opacity = 0.5;
  saveButton.disabled = true;
}
function clearInputFields() {
  titleInput.value = "";
  bodyInput.innerText = "";
}
