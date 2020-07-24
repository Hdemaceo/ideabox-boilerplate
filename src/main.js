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
saveButton.addEventListener("click", saveUserInput)


// FUNCTIONS:
function saveUserInput(event) {
  event.preventDefault()
  var userTitle = titleInput.value
  var userBody = bodyInput.innerText
  currentIdea = new Idea(userTitle, userBody)
}
