// Day 19 of JS Challenges

//Creating a book class to add books to a virtual bookstore
class Book {
    constructor(title, author, ISBN, numCopies) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    }

    // Getter
    get availability() {
        return this.getAvailability();
    }

    // Method
    getAvailability() {
        if(this.numCopies === 0) {
            return "out of stock"
        } else if (this.numCopies < 10) {
            return "low stock"
        } else {
            return "in stock"
        }
        
    }

    sell(amt = 1) {
        this.numCopies = this.numCopies - amt;
    }

    restock(copies = 5) {
        this.numCopies = this.numCopies + copies;
    }
  }

  const HarryPotter = new Book("Harry Potter 1", "JK Rollins", 123456, 5)
  console.log(HarryPotter.getAvailability());
  HarryPotter.restock(12);
  console.log(HarryPotter.getAvailability());
  HarryPotter.sell(17);
  console.log(HarryPotter.getAvailability());

  //Creating a prototype for movie

  class Moovie {
    constructor(title, director, genre, releaseYear, rating) {
      this.title = title;
      this.director = director;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
    }

    // Getter
    get getOverview() {
        return this.getOvervieww();
    }

    // Method
    getOvervieww() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
    }

}

let happyFeet = new Moovie("happy feet", "Mr.Penguin", "Happy fun times", 2009, 9.5);
console.log(happyFeet.getOvervieww());

//Second Method

function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
      this.director = director;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
}

// adding to the ACTUAL PROTOTYPE of the Movie function

Movie.prototype.getOverview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
}