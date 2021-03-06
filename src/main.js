// INPUTS:
var userIdeas = [];
var titleInput = document.querySelector(".text-input");
var bodyInput = document.querySelector(".body-input");
var search = document.querySelector(".search-input")

// BUTTONS:
var saveButton = document.querySelector(".save-button");
var searchButton = document.querySelector(".search-img");
var showStarredIdeasButton = document.querySelector(".show-starred-button");

var closeNavigationButton = document.querySelector(".close-nav-view");
var openNavigationButton = document.querySelector(".open-nav-image")
var closedNavigation = document.querySelector(".purple-4");
var openNavigation = document.querySelector(".nav-view-container")
// CONTAINERS:
var ideaCardContainer = document.querySelector(".idea-cards");

// EVENT LISTENERS:
openNavigationButton.addEventListener("click", toggleMenu);
search.addEventListener("input", findIdeas);
showStarredIdeasButton.addEventListener('click', showStarredIdeas);
saveButton.addEventListener("click", createNewIdeaCard);
titleInput.addEventListener("keydown", enableSaveButton);
bodyInput.addEventListener("keydown", enableSaveButton);
ideaCardContainer.addEventListener("click", determineIdeaCardEvent);
window.addEventListener("load", onLoad);


// FUNCTIONS:
function toggleMenu() {
  closedNavigation.classList.toggle("hidden")
  openNavigation.classList.toggle("hidden")
}

function findIdeas(event) {
  var foundIdeas = [];
  var inputByUser = event.target.value.toLowerCase();
  for (var i = 0; i < userIdeas.length; i++){
    var lowerCaseTitle = userIdeas[i].title.toLowerCase();
    var lowerCaseBody = userIdeas[i].body.toLowerCase();
    if (lowerCaseTitle.includes(inputByUser) || lowerCaseBody.includes(inputByUser)){
      foundIdeas.push(userIdeas[i])
      displayUserCards(foundIdeas)
    }
    if (foundIdeas.length === 0){
      ideaCardContainer.innerHTML = "";
    }
  }
}

function onLoad() {
  getStoredIdeas();
  displayUserCards(userIdeas);
  disableSaveButton();
}

function showStarredIdeas() {
    showButtonHandler()
    toggleButtonName()
}

function showButtonHandler() {
  if(showStarredIdeasButton.innerText === "Show Starred Ideas") {
    showStarredIdeasOnly();
  } else {
    displayUserCards(userIdeas);
  }
}

function showStarredIdeasOnly() {
  var starredCards = []
  for (var i = 0; i < userIdeas.length; i++) {
    if (userIdeas[i].star) {
      starredCards.push(userIdeas[i])
      displayUserCards(starredCards)
    }
  }
}

function toggleButtonName() {
    if (showStarredIdeasButton.innerText === "Show Starred Ideas"){
      showStarredIdeasButton.innerText = "Show All Ideas"
  } else if (showStarredIdeasButton.innerText === "Show All Ideas"){
      showStarredIdeasButton.innerText = "Show Starred Ideas"
  }
}

function getStoredIdeas() {
  var retrievedInformation = JSON.parse(localStorage.getItem("storedUserIdeas")) || [];
    for (var i = 0; i < retrievedInformation.length; i++){
      var reinstantiatedIdeas = new Idea(retrievedInformation[i].title, retrievedInformation[i].body, retrievedInformation[i].id, retrievedInformation[i].star, retrievedInformation[i].src)
      userIdeas.push(reinstantiatedIdeas )
      displayUserCards(userIdeas);
    }
}

function createNewIdeaCard(event) {
  event.preventDefault();
  var storedIdea = instantiateIdea();
  storeCurrentIdea(storedIdea);
  disableSaveButton();
  clearInputFields();
  displayUserCards(userIdeas);
}

function instantiateIdea() {
  var userTitle = titleInput.value;
  var userBody = bodyInput.innerText;
  var currentIdea = new Idea(userTitle, userBody);
  return currentIdea;
}

function storeCurrentIdea(storedIdea) {
  userIdeas.unshift(storedIdea);
  storedIdea.saveToStorage();
}

function enableSaveButton() {
  if (titleInput.length !== 0 && bodyInput.length !== 0) {
      saveButton.style.opacity = 1;
      saveButton.disabled = false;
      saveButton.style.cursor = "pointer";
  } else {
      disableSaveButton();
  }
}

function disableSaveButton(){
  saveButton.style.cursor = "none";
  saveButton.style.opacity = 0.5;
  saveButton.disabled = true;
}

function clearInputFields() {
  titleInput.value = "";
  bodyInput.innerText = "";
}

function displayUserCards(ideasArray) {
  ideaCardContainer.innerHTML = "";
  for  (var i = 0; i < ideasArray.length; i++) {
      ideaCardContainer.innerHTML +=
      `<article class="users-idea" id=${ideasArray[i].id}>
          <div class="user-controls">
            <button>
              <img class="idea-img star" id=${ideasArray[i].id} src=${ideasArray[i].src} alt="Star icon">
            </button>
            <button>
              <img class="idea-img close" id=${ideasArray[i].id} src="assets/delete.svg" alt="Delete icon">
            </button>
          </div>
          <div class="main-idea">
            <h4 class="idea-title">${ideasArray[i].title}</h4>
            <p class="idea-text">${ideasArray[i].body}</p>
          </div>
          <div class="add-comment">
            <button>
              <img class="idea-img add" id=${ideasArray[i].id} src="assets/comment.svg" alt="Comment Icon">
            </button>
            <h4 class="comment">Comment</h4>
          </div>
        </article>`
  }
}

function determineIdeaCardEvent(event) {
  if (event.target.classList.contains("star")) {
    toggleFavoriteIdeas(event);
  }
  if (event.target.classList.contains("close")) {
    deleteIdeaCard(event);
  }
  if (event.target.classList.contains("add")) {
    addComment(event);
  }
}

function deleteIdeaCard(event){
  var elementId = parseInt(event.target.id, 10);
  for (var i = 0; i < userIdeas.length; i++) {
    if(userIdeas[i].id === elementId) {
      userIdeas[i].deleteFromStorage()
      userIdeas.splice(i, 1)
    }
  }
  displayUserCards(userIdeas);
}

function toggleFavoriteIdeas(event){
  var elementId = parseInt(event.target.id, 10);
  for (var i = 0; i < userIdeas.length; i++) {
    if (userIdeas[i].id === elementId) {
      userIdeas[i].updateIdea()
      userIdeas[i].saveToStorage()
    }
  }
  displayUserCards(userIdeas);
}
