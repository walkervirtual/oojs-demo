function Ninja(stars){

  this.stars = stars;

  this.getStars = function(){
    return this.stars;
  };

  hasSword: true;

  this.throwStar = function() {
    if (this.getStars() > 0){
      console.log("Threw a Star");
      this.stars--;
    } else {
      console.log("No more stars! Vanish!");
    }
  };
}

var ninja_instance = new Ninja(4);
