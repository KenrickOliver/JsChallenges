// Day 15 of Js Challenges

/* #1 Manually Flatten an Array with sub Array elements
    Flatten a nested Array, you must account for varying levels of nesting.
    You can NOT use the built in Array.flat(Infinity) method. Neeed a full solution
    */

    function steamrollArray(arr) {
        //Flatten function flattens an Array to ONE level
        const flatten = (item) => {
          const result = [];
      
          for(const el of item) {
            if(Array.isArray(el)) {
              result.push(...el)
            } else {
              result.push(el)
            }
          }
      
          return result;
        }
      

        // While loop checks if ans has an nested array and continues calling the flatten function
        // from above until the isFlat flag is true again.
        let ans = arr;
        while (true) {
          let isFlat = true;
          for (let el of ans) {
            if(Array.isArray(el)) {
              isFlat = false;
              ans = flatten(ans)
              break;
            }
          }
      
          if(isFlat) {
            return ans
          }
        }
        //return arr;
      }
      
      steamrollArray([1, [2], [3, [[4]]]]);

      /* #2 Binary Fun
      Return an English translated sentence of the passed binary string.
        The binary string will be space separated.
        */
        function binaryAgent(str) {
            let arr = str.split(' ')
            //takes the string converts to a number, then convers THAT number to a JS char
            let arr2 = arr.map((item) => {
              return String.fromCharCode(parseInt(item, 2)) 
            })
            let ans = arr2.join('')
            console.log(ans)
            return ans;
          }
          
          binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
