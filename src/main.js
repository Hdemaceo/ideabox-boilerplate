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

// CONTAINERS:
var ideaCardContainer = document.querySelector(".idea-cards");

// var commentButton = document.querySelector(".add-comment");

// EVENT LISTENERS:

saveButton.addEventListener("click", createNewIdeaCard);
// titleInput.addEventListener("keydown", enableSaveButton);
bodyInput.addEventListener("keydown", enableSaveButton);
ideaCardContainer.addEventListener("click", determineIdeaCardEvent);
window.addEventListener("load", getStoredIdeas);

// FUNCTIONS:
function getStoredIdeas() {

  // When the page loads, userIdeas are displayed.
  // Retrieve the userIdeas from localstorage
  // display localstorage data in idea class section
}


function createNewIdeaCard(event) {
  event.preventDefault()
  var storedIdea = instantiateIdea();
  storeCurrentIdea(storedIdea);
  disableSaveButton();
  clearInputFields();
  displayUserCards();
}

function instantiateIdea() {
  var userTitle = titleInput.value
  var userBody = bodyInput.innerText
  var currentIdea = new Idea(userTitle, userBody)
  return currentIdea;
}

function storeCurrentIdea(storedIdea) {
  userIdeas.unshift(storedIdea);
  storedIdea.saveToStorage();
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

function displayUserCards() {
  ideaCardContainer.innerHTML = "";
  for(var i = 0; i < userIdeas.length; i++) {
      ideaCardContainer.innerHTML +=
      `<article class="users-idea" id=${userIdeas[i].id}>
          <div class="user-controls">
            <button>
              <img class="idea-img star" id=${userIdeas[i].id} src=${userIdeas[i].src} alt="Star icon">
            </button>
            <button>
              <img class="idea-img close" id=${userIdeas[i].id} src="assets/delete.svg" alt="Delete icon">
            </button>
          </div>
          <div class="main-idea">
            <h4 class="idea-title">${userIdeas[i].title}</h4>
            <p class="idea-text">${userIdeas[i].body}</p>
          </div>
          <div class="add-comment">
            <button>
              <img class="idea-img add" id=${userIdeas[i].id} src="assets/comment.svg" alt="Comment Icon">
            </button>
            <h4 class="comment">Comment</h4>
          </div>
        </article>`
  }
}

function determineIdeaCardEvent(event) {
  var starButton = document.querySelector(".star");
  var closeButton = document.querySelector(".close");
  var addCommentButton = document.querySelector(".add");
  if(event.target.classList.contains("star")) {
    toggleFavoriteIdeas(event);
  } if (event.target.classList.contains("close")) {
    deleteIdeaCard(event);
  } if (event.target.classList.contains("add")) {
    addComment(event);
  }
}

function deleteIdeaCard(event){
  var elementId = parseInt(event.target.id, 10);
  for(var i = 0; i < userIdeas.length; i++) {
    if(userIdeas[i].id === elementId) {
      userIdeas.splice(i, 1)
    }
  }
  displayUserCards();
}

function toggleFavoriteIdeas(event){
  var elementId = parseInt(event.target.id, 10);
  for(var i = 0; i < userIdeas.length; i++) {
    if(userIdeas[i].id === elementId) {
      userIdeas[i].updateIdea();
    }
  }
  displayUserCards();
}


function addComment(event){
}
