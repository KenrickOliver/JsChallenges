/* Day 16 of JS Challenges */

/* Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
** This is technical testing Closure using PRE-ES6 methods so no classes **
*/

let Person = function(firstAndLast) {
    let firstHolder = firstAndLast.split(' ')[0];
    let lastHolder = firstAndLast.split(' ')[1];

    this.getFullName = function() {
        return `${firstHolder} ${lastHolder}`
    };

    this.getFirstName = function() {
        return firstHolder
    }

    this.getLastName = function() {
        return lastHolder
    }

    this.setFirstName = function(first) {
        firstHolder = first;
    }

    this.setLastName = function(last) {
        lastHolder = last
    }

    this.setFullName = function(firstAndLast) {
        firstHolder = firstAndLast.split(' ')[0];
        lastHolder = firstAndLast.split(' ')[1];
    }
}

/* Map the Debris
    Return a new array that transforms the elements' average altitude into their orbital
     periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
ou can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, 
and the GM value of earth is 398600.4418 km3s-2.
*/
function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;


    let ans = arr.map(obj => {
        return {
            name: obj.name,
            orbitalPeriod: Math.round(2*Math.PI * (Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM)))
        }
    })

    
    return ans;
  }
