// Day 14 of JS Challenges

/* #1 Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
s well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will 
not necessarily be in numerical order.

For example, if given 1 and 3, 
find the smallest common multiple of both 1 and 3 
that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

//First Brute forece attempt (Highly unoptimized and run into issue with largers numbers)

function smallestCommons(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr);
    let minArr = [];
    let maxArr = [];
    let finalArr = [];
    let testNum = 10001;
  
    for(let i =0; i < testNum; i++){
      minArr.push(min*i)
      maxArr.push(max*i)
    }
    minArr.sort((a,b)=>{
      return a-b;
    })
    for(let i=0; i<testNum; i++){
      if(minArr.includes(maxArr[i]) === true && finalArr.includes(maxArr[i]) !== true){
        finalArr.push(maxArr[i])
      }
  
      if(maxArr.includes(minArr[i]) === true && finalArr.includes(minArr[i]) !== true){
        finalArr.push(minArr[i])
      }
  
    }
    finalArr.sort((a,b) => {
      return a-b;
    })
  
    let ansArr = finalArr.filter((val)=>{
      let tempArr = [];
      for(let i=min; i<max+1; i++){
        if(val%i === 0){
          tempArr.push(true)
        } else {
          tempArr.push(false)
        }
      }
      if (tempArr.includes(false) !== true){
        return val
      }
    })
    console.log(ansArr[0])
    return ansArr[0];
  }
  
  
  smallestCommons([2,10]);

  // ------------------------------------
  /* Non brute for method for smallest Common Multiple */
  function smallestCommons(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let scm = max; // we assume the SCM is the biggest number

    while (true) {
      let isScm = true; //assuming SCM IS the big number
      //but we still lopp through the range(min -> max) to test our assumption
      for(let i = min; i <= max; i++){
        if(scm % i !== 0) {
          isScm = false;
          break;
        }
      }

      if (isScm) {
        console.log(scm)
        return scm;
      } else {
        scm++
      }
    }
  }


  //-------------------------------------------

  function checkReccureing(input) {
      let arr = [];
      for(let i=0; i < input.length; i++){
          if(arr.includes(input[i]) !== true){
              arr.push(input[i])
          } else {
              return input[i]
          }
      }
  }

  checkReccureing([2,5,5,2,4])

// #3
/* Function to check if there are duplicates ltters in the Sring?
techincaly a O(n^2) operation becasue worst case one pass therough the ENTIRE string and while 
nested loop comparing it to every other letter in the string 
*/

  function hasDupes(thing){
    let arr = thing.split('')
    let arr2 = [];
    let ans = false;
    for(let i = 0; i < arr.length; i++){
        if(arr2.includes(arr[i])){
            ans = true;
            break;
        } else {
            arr2.push(arr[i])
        }
    }
    return ans
  }