/* #1
   You will be given an array of drinks, 
   with each drink being an object with two properties: name and price. 
   Create a function that has the drinks array as an argument 
   and return the drinks objects sorted by price in ascending order. 
*/

function sortDrinkByPrice(drinks) {
    let drinksSorted = drinks.sort((a, b) => a.price - b.price);
    return drinksSorted;
}

/* #2 Sum of Resistance in Series Circuits
   When resistors are connected together in series, 
   the same current passes through each resistor in the chain and 
   the total resistance, RT, of the circuit must be equal 
   to the sum of all the individual resistors added together.
*/   

function seriesResistance(arr) {
    let sum = arr.reduce((a,b) => a+b,0);
    if(sum <= 1){
        return `${sum} ohm`;
    } else {
        return `${sum} ohms`;
    }
}

/* #3
    Write a function that mimics (without the use of <<) the left shift operator and 
    returns the result from the two given integers.
*/
function shiftToLeft(x, y) {
	return (x * (Math.pow(2, y)));
}

/* #4
    Create a function that, given a string str, finds a letter that has a single occurrence. 
    Return the letter in uppercase. 
    If the input is empty, return an empty string "".
*/
function singleOccurrence(str) {
	if(str.length === 0){
        return "";
    } else {
        let str2 = str.toUpperCase();
        let arr = str2.split("");
        return arr.filter(x => str2.indexOf(x) === str2.lastIndexOf(x))[0];      
    }
}    