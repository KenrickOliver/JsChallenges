//Day 20 of JS Challenges


// Filter vegetables dishes and diplay item in the ul element

const dishes = [{name: "Eggplant Dish", vegetarian: true},
{name: "Spaghetti and meatballs", vegetarian: false},
{name: "Cesar Salad", vegetarian: true},
{name: "Meatlovers Pizza", vegetarian: false}]

const list = document.getElementById('ul-el')

list.innerHTML = dishes.filter(dish => {
    if(dish.vegetarian === true) {
        return `<li>${dish.name}</li`;
    }
})

// Extending a book class and adding differnt properties and methods

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

  // NEED to call the extends method

  class TechnicalBook extends Book {
      constructor(title, author, ISBN, numCopies, edition) {
          super(title, author, ISBN, numCopies); // NEED to call super to get the original 4 properties from the book class
          this.edition = edition; // this is the new proeprty we are adding
      }

      //this is the new method we are adding
      getEdition() {
          return `The current version of this book is ${this.edition}.`;
      }
  }

  // Random Mini exercises
  // 1
  let firstName = 'John'
  let lastName = 'Doe'
  let fullName = `${firstName} ${lastName}`

  // 2 gamePoints
  let points = 0;
  function addPoints(){
      points += 3;
  }
 
  function removePoints(){
    points -= 1;
}
