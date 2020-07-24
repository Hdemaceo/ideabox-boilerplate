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

// GLOBAL VARIABLES DATA MODEL
var userIdeas = [];
var currentIdea;

// EVENT LISTENERS:
saveButton.addEventListener("click", saveUserInput)
