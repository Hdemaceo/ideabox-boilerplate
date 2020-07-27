class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
    this.src = "assets/star.svg";
  }

  saveToStorage() {
     localStorage.setItem(this.id, JSON.stringify(this));

   }

  deleteFromStorage() {

  }

  updateIdea() {
    this.star = !this.star
    this.star ? this.src = "assets/star-active.svg" : this.src = "assets/star.svg"
  }
}
