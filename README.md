# Idea Box
### Developers ::
- [Kristi Miller](https://github.com/Kristiannmiller)
- [Orlando Murcio](https://github.com/Atos20)
- [Demaceo Howard](https://github.com/Hdemaceo)

### Project Links ::
- [Repo](https://github.com/Hdemaceo/ideabox-boilerplate)
- [Deployed Page](https://hdemaceo.github.io/ideabox-boilerplate/)

## Set-up ::
- Create repo and clone to personal computer
- Open in text editor
- Read the README
- In terminal, run command "open index.html" to interact with app.

## Overview & Learning Goals ::
For our Mod 1 group project, Idea Box, we've been given a repository as well as a basic HTML layout to work on. The intended goal is to create an application with opperational functionality according to the reburic and provided composition.

Our learning goals are to learn more about responsive layouts, familiarize ourselves with local storage, become more fluent with HTML and CSS, and finetune our GitHub collaborative workflow.


## Progression
7/21: Completed DTR, made GitHub repository, and independent familiarization with rubric.

7/22: Created basic HTML architecture according to provided comp. Began work on the styles.css file with driver-navigator approach. Decided as a team that divide-and-conquer would be a better approach for working with css. Assigned each team member to a portion of the css, and worked individually while on a video call together in case of questions. Iteration 0-1 complete.

7/23: Began work on the main.js and idea.js files. Created the Idea class and methods (incomplete) to later add functionality to. Created querySelector variables for buttons and main inputs. Added userIdeas and currentIdea as global variables. Added eventListeners on the saveButton to invoke the saveUserInput function. Created storeCurrentIdea function to add functionality to later. Created disableSaveButton function and found a bug. Decided to return the next day for debugging.

7/24: Refactor createNewIdeaCard to include event.preventDefault, and  instantiateIdea function. Rename SaveUserInput function to instantiateIdea and refactor to return currentIdea (now a local variable). Added bodyInput and titleInput eventListeners in order to toggle disable and enable on the save button. Refactor enableSaveButton function, added opacity change to button when disabled. Created disableSaveButton function. Added functionality to updateIdea method in Idea.js. Added querySelector to ideaCardContainer. Fixed disableSaveButton bug. Created clearInputFields, and displayUserCards functions. Iteration 2 complete.

7/25: Divide and conquered in groups of two. Started with Orlando and Kristi pseudocoding through favoriting and deleting ideas by means of updating the data model and the DOM, running into an issue/bug with toggling the star image. Kristi and Demaceo worked together for the rest of the day translating the psuedocode into written code. Added determineIdeaCardEvent function that invokes toggleFavoriteIdeas, deleteIdeaCard, and addComment functions respectively. Interpolated new information into displayUserCards to update the DOM. Fixed bug within the toggleFavoriteIdeas function. Iteration 3 complete.

7/26: Orlando did some independent work on the media queries in our styles.css file to get a more responsive design after we realized that our design was currently not responding the way we wanted it to. We decide to revisit the media queries again at a later date.

7/27: Begin work on storing idea cards locally. Added functionality to the saveToStorage method in our Idea class. Added invocation of saveToStorage method to instantiateIdea function. Added getStoredIdeas function with functionality to retrieve information from local storage. Add invocation of updateIdea method to toggleFavoriteIdeas.

7/28:

7/29: Project due at 9pm.

## Showcase ::
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"> </br>
  <img width="460" height="auto" src=" " alt=" ">
</p>
<p align="center"></br>
  <img width="200" height="auto" src=" " alt=" ">
</p>

Project spec & rubric can be found [here](https://github.com/turingschool-examples/ideabox-boilerplate).
