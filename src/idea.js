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
   localStorage.removeItem(this);
 }

  updateIdea() {
    this.star = !this.star
    this.star ? this.src = "assets/star-active.svg" : this.src = "assets/star.svg"
  }
}
