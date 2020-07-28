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
    getStoredIdeas()
    var elementId = parseInt(event.target.id, 10);
    for (var i = 0; i < userIdeas.length; i++){
      if (userIdeas[i].id === elementId){
        userIdeas.splice(i, 1)
        this.saveToStorage()
      }  
    }
    // localStorage.removeItem("storedInformation");
 }

  updateIdea() {
    this.star = !this.star
    this.star ? this.src = "assets/star-active.svg" : this.src = "assets/star.svg"
  }
}
