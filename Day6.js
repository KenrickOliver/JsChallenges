// Day 6 of JS Challenges

/* #1
   Sum All Numbers in a Range - We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
   The lowest number will not always come first. EX. [1,4]

*/
function sumAll(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for(let i=min; i<max+1; i++){
      sum += i;
    }
    return sum;
  }

/* #2
   Diff Two Arrays - 
   Compare two arrays and return a new array with any items only found 
   in one of the two given arrays, but not both. 
   In other words, return the symmetric difference of the two arrays.
   Note - You can return the array with its elements in any order.
*/   

function diffArray(arr1, arr2) {
    let diffArr = [];
    
      arr1.forEach( x =>{
        if(arr2.includes(x) !== true){
          diffArr.push(x);
        }
      })
    
      arr2.forEach( x =>{
        if(arr1.includes(x) !== true){
          diffArr.push(x);
        }
      })
  
    return diffArr;
  }

  // We can improve the performance by converting both arrays into 
  //ES6 Set objects first.

  function diff(first, second) {
    const a = new Set(first);
    const b = new Set(second);
 
    return [
        ...first.filter(x => !b.has(x)),
        ...second.filter(x => !a.has(x))
    ];
}
 
const first = [ 1, 2, 3, 4, 5 ];
const second = [ 4, 5, 6 ];
 
const difference = diff(first, second);
console.log(difference);


