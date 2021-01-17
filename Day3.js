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
        let newarr = sorted.filter((x) =>{
            if(x <= num){
                return x;
            }
            });
        
        return newarr.length;
  }