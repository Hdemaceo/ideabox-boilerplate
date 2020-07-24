// INPUTS:
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
window.onload = disableSaveButton
saveButton.addEventListener("click", createNewIdeaCard)

// FUNCTIONS:
function createNewIdeaCard() {
  saveUserInput();
  storeCurrentIdea();
}


function saveUserInput(event) {
  event.preventDefault()
  var userTitle = titleInput.value
  var userBody = bodyInput.innerText
  currentIdea = new Idea(userTitle, userBody)
  storeCurrentIdea();
}

function storeCurrentIdea() {
  userIdeas.unshift(currentIdea)
}

function disableSaveButton() {
  if(titleInput.value === "" || bodyInput.innerText === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}
