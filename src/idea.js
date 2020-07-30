class Idea {
  constructor( title, body, id, star, src) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now() ;
    this.star = star || false ;
    this.src =  src || "assets/star.svg";
  }

  saveToStorage() {
     localStorage.setItem("storedUserIdeas", JSON.stringify(userIdeas));
   }

  deleteFromStorage() {
    var localStorageIdeas = JSON.parse(localStorage.getItem("storedUserIdeas"));
    for (var i = 0; i < localStorageIdeas.length; i++){
      if (localStorageIdeas[i].id === this.id) {
        localStorageIdeas.splice(i, 1);
      }
    }
    localStorage.setItem("storedUserIdeas", JSON.stringify(localStorageIdeas))
 }
 
  updateIdea() {
    this.star = !this.star
    this.star ? this.src = "assets/star-active.svg" : this.src = "assets/star.svg"
  }
}
