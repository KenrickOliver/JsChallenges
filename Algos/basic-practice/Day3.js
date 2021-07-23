// Day 3 Jan 16th, 2021

/* #1
    Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
    let arr2 = arr.filter((x) => {
        if(x){
            return x;
        }
    });
    return arr2;
  }

  /* #2 
      Return the lowest index at which a value (second argument) s
      hould be inserted into an array (first argument) once it has been sorted. 
      The returned value should be a number.
      For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
      because it is greater than 1 (index 0), but less than 2 (index 1).
      Likewise, getIndexToIns([20,3,5], 19) should return 2
      because once the array has been sorted it will look like [3,5,20] and 
      19 is less than 20 (index 2) and greater than 5 (index 1). 
   */ 

  function getIndexToIns(arr, num) {
    let sorted = arr.sort((a,b) => a-b);
    let newArr = sorted.filter((x) => {
        if(x < num){
            return x;
        }
    });
    if(sorted.includes(num) === true){
        let position = sorted.indexOf(num);
        return position;
    } else {
        return newArr.length;
    }
    
}

/* #3
  Return true if the string in the first element of the array contains all of the letters 
  of the string in the second element of the array.
    For example, ["hello", "Hello"], 
    should return true because all of the letters in the second string are present in the 
    first, ignoring case.   
*/
function mutation(arr) {
let str1 = arr[0];
let str2 = arr[1];
let arr1 = str1.split('').map((x) => x.toLowerCase());
let arr2 = str2.split('').map((x) => x.toLowerCase());
let arr3 = [];
for (let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1.includes(arr2[j])){
            arr3.push(true);
        } else {
            arr3.push(false);
        }
    }
}
if(arr3.includes(false) === true){
    return false;
} else {
    return true;
}

}

/* #4
Write a function that splits an array (first argument) into groups 
the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
let arr2 = [];
while(arr.length) {
arr2.push(arr.splice(0,size));
}
return arr2;
}