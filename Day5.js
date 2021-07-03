/* Everything be true 
   Check if the predicate (second argument) is truthy on all elements of a collection 
   (first argument).In other words, you are given an array collection of objects. 
   The predicate pre will be an object property and you need to return true if its 
   value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true 
when evaluated in a Boolean context
*/

function truthCheck(collection, pre) {
    let isTrue = true;
    for (const obj of collection) {
        if (!obj[pre]) {
            isTrue = false;
            break;
        }
    }

    return isTrue;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  /* Arguments Optional
  Create a function that sums two arguments together. 
  If only one argument is provided, then return a function 
  that expects one argument and returns the sum.
  For example, addTogether(2, 3) should return 5, and addTogether(2) 
  hould return a function.
  Calling this returned function with a single argument will then return the sum:

    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
  If either argument isn't a valid number, return undefined.
  */

  function addTogether(...args) {
  
    if(args.length === 2) {
      if(typeof args[0] !== 'number' || typeof args[1] !== 'number'){
        return undefined
      }
      let ans = args[0] + args[1]
      console.log(ans)
      return ans
    } else if(args.length === 1) {
      if(typeof args[0] !== 'number') {
        return undefined
      }
      let newSum = function(num) {
        if(typeof num !== 'number') {
          return undefined
        }
        return args[0] + num
      }
      console.log(newSum)
    return newSum;
    }
  }
  
  addTogether(2,3);

