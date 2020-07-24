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

// FUNCTIONS:
function createNewIdeaCard(event) {
  event.preventDefault()
  saveUserInput();
  storeCurrentIdea();
}

function instantiateIdea() {
  var userTitle = titleInput.value
  var userBody = bodyInput.innerText
  var currentIdea = new Idea(userTitle, userBody)
  return currentIdea;
}

function storeCurrentIdea() {
  userIdeas.unshift(currentIdea)
}

function enableSaveButton() {
  if(titleInput.value === "" || bodyInput.innerText === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}
