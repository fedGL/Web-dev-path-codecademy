/*
We want to define a parent class with all the common behavior and attributes of classes "book", "CD" and "Movie" as defined:
Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(){
    let averageRating = this._ratings.reduce((accum,currentValue) => {
      return (accum+currentValue) / this._ratings.length;
    })
    return averageRating;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
  }

  addRating(rating){
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}

// Test Book class
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // returns true
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Test Movie class
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // returns true
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());