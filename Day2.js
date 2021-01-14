// Day 2 Jan 13th 2021

/* #1
  Truncate a string (first argument) if it is longer than the given maximum string length 
  (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    if(num >= str.length) {
        return str;
    } else {
    let str2 = str.slice(0, num);
    return `${str2}...`;
    }
  }

  /* #2
    Create a function that looks through an array arr and returns the first element in it 
    that passes a 'truth test'. This means that given an element x
    the 'truth test' is passed if func(x) is true. If no element passes the test,
    return undefined.
  */   

 function findElement(arr, func) {
    let arr2 = arr.filter(func);
    return arr2[0];
  }

  /* #3
    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
  */

   function booWho(bool) {
       if(bool === true || bool === false){
           return true;
       } else {
           return false;
       }
  }

  /* #4
    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.
    For the purpose of this exercise, 
    you should also capitalize connecting words like "the" and "of".
  */

   function titleCase(str) {
    let arr = str.split(" ");
    let arr2 = arr.map((x) => {
        let y = x.slice(0,1).toUpperCase();
        let z = x.slice(1).toLowerCase()
        return `${y}${z}`
    })
    
    return arr2.join(" ");
  }
  /* #5
    You are given two arrays and an index.
    Copy each element of the first array into the second array, in order.
    Begin inserting elements at index n of the second array.
    Return the resulting array. 
    The input arrays should remain the same after the function runs.
  */

function frankenSplice(arr1, arr2, n) {
    let arr3 = [...arr2]
    let res = arr3.splice(n,0, ...arr1);
    return arr3;
  }