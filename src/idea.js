class Idea {
  constructor( title, body, id, star, src) {
    this.title = title;
    this.body = body;
    this.id = id || Date.now() ;
    this.star = star || false ;
    this.src =  src || "assets/star.svg";
  }

  saveToStorage() {
     localStorage.setItem("storedInformation", JSON.stringify(userIdeas));

   }
  deleteFromStorage() {
    // localStorage.clear();
    // this.saveToStorage();
    var localStorageIdeas = JSON.parse(localStorage.getItem("storedInformation"));
    for (var i = 0; i < localStorageIdeas.length; i++){
      if (localStorageIdeas[i].id === this.id) {
        localStorageIdeas.splice(i, 1);
      }
    }
    localStorage.setItem("storedInformation", JSON.stringify(localStorageIdeas))
 }

  updateIdea() {
    this.star = !this.star
    this.star ? this.src = "assets/star-active.svg" : this.src = "assets/star.svg"
  }
}
