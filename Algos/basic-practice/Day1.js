// Day1 Jan 11th, 2021

/* #1
Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return 
the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'

Feel free to test your code under the function definition.
*/

function colorMessage(favoriteColor, shirtColor){
    if(favoriteColor === shirtColor) {
        return `The shirt is your favorite color!`;
    } else {
        return `That is a nice color.`;
    }
}

/* #2
Create a function isEven() that takes a number as its only parameter. 
The function should return true if the number is even and false if the number is odd.
*/

function isEven(num) {
    if(num%2 === 0){
        return true;
    } else {
        return false;
    }
}

/* #3
Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', 
where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'
If the variable x is between 10 and 99, return the string 'Two digits: N', 
where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'
Any other value of x, including negative numbers, return the string 'The number is: N', 
where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'
*/

function numberDigits(x){
    if(x >= 0 && x <=9){
        return `One digit: ${x}`;
    } else if (x > 9 && x <= 99){
        return `Two digits: ${x}`;
    } else {
        return `The number is: ${x}`;
    }
}

/* #4

   The algorithm to convert from Celsius
 to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 */

function convertToF(celsius) {
    let fahrenheit = (celsius * (9/5))+32;
    return fahrenheit;
  }

/*  #5
    Reverse the provided string.
    Your result must be a string.
*/

function reverseString(str) {
    let str2 = str.split("").reverse().join("")
    return str2;
  }

/* #6
   Return the factorial of the provided integer.
   Assumption**: Only integers greater than or equal to zero 
   will be supplied to the function.
*/

function factorialize(num) {
    let arr = [];
    if(num === 0){
        return 1;
    } else {
        for(let i=1; i<num+1; i++){
            arr.push(i);
        };
    }
    let num2 = arr.reduce((a,b) => a*b, 1);
    return num2;
  }

  /* #7
    Return the length of the longest word in the provided sentence.
    Your response should be a number.
*/

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let arr2 = arr.map((x) => x.length);
    let max = Math.max(...arr2);
    return max;
  }

  /* #8 
    Return an array consisting of the largest number from each provided sub-array. 
    For simplicity, the provided array will contain exactly 4 sub-arrays.
    */

   function largestOfFour(arr) {
       let arr2 = arr.map((x) =>{
           return Math.max(...x);
       });
    return arr2;
  }

  /* #9
  Check if a string (first argument, str) 
  ends with the given target string (second argument, target).
  ** try NOT to use endsWith() from ES6. **
  */
 function confirmEnding(str, target) {
    let exist = str.slice(-target.length) == target; // true
    return exist;
  }

  /* #10
     Repeat a given string str (first argument) for num times (second argument). 
     Return an empty string if num is not a positive number. 
    ** For the purpose of this challenge, do not use the built-in .repeat() method.**
    */
   function repeatStringNumTimes(str, num) {
    let arr = [];
  
    if(num <= 0){
             return ""
         } else {
             for(let i=1; i < num+1; i++){
                 arr.push(str)
             }
         }
         console.log(arr)
      return arr.join("");
  }