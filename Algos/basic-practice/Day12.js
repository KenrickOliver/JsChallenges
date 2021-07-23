// Day #12 of JS

/* #1 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, 
but with NO duplicates in the final array.
The unique numbers should be sorted by their original order, 
but the final array should NOT be sorted in numerical order */

function uniteUnique(...arr) {
    let elPlat = arr.flat();
    let newArr = [];
    for (let i=0; i < elPlat.length; i++){
      if(newArr.includes(elPlat[i]) !== true){
        newArr.push(elPlat[i])
      }
    }
    console.log(elPlat)
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  /* #2
  Convert the characters &, <, >, " (double quote), and ' (apostrophe),
  in a string to their corresponding HTML entities.
  */
  function convertHTML(str) {
    let arr = str.split('')
  
    let obj={
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": "&apos;",
      '"': "&quot;"
    }
  
    let arr2 = arr.map((val)=> {
      if(val in obj){
        return obj[val]
      } else {
        return val
      }
    })
  
    let str2 = arr2.join('');
  
   console.log(arr2.join(''))
    return str2;
  }
  
  convertHTML("Schindler's List");