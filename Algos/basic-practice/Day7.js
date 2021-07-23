// Day 7 of JS Challenges

/* #1 Seek and Destroy
    You will be provided with an initial array (
    the first argument in the destroyer function),
    followed by one or more arguments. 
    Remove all elements from the initial array that are of the same value 
    as these arguments.
*/

function destroyer(arr, ...args) {
    let arr2 = arr.filter((value) =>{
      if(args.includes(value) !== true){
        return value;
      }
    })
    return arr2;
  }

/* #2 
  Make a function that looks through an array of objects (first argument) 
  and returns an array of all objects that have matching name and value pairs 
  (second argument).
 Each name and value pair of the source object has to be present in the object 
 from the collection if it is to be included in the returned array.

 For example,
  if the first argument is 
 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
 and the second argument is { last: "Capulet" }, 
 then you must return the third object from the array (the first argument), 
 because it contains the name and its value, 
 that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    
    collection.forEach((obj) =>{
        let count=0;
        for(let i=0; i<sourceKeys.length; i++){
          
          if(obj.hasOwnProperty(sourceKeys[i]) && obj[sourceKeys[i]] === source[sourceKeys[i]]){
            console.log(`srcprop: ${source[sourceKeys[i]]}, collOBJprop: ${obj[sourceKeys[i]]}`)
            count += 1;
          }
          
        }
        if(count === sourceKeys.length){
            arr.push(obj);
        } 
      })
    // Only change code above this line
    return arr;
  }