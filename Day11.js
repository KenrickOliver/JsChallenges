// Day 11 of JS Challenges

/* #1 Implement own version of map() on the Array Prototype */


Array.prototype.myMap = function(callback) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i]));
    }
    return newArray;
};

/* #2 Implement own version of filter() on the Array Prototype */

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for(let i=0; i < this.length; i++){
      if(callback(this[i]) === true){
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

  /* #3 Missing Letters
    Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.
  */

    function fearNotLetter(str) {
      let arr = str.split('');
      let arrNum = arr.map((value) => value.charCodeAt(0))
      let min = Math.min(...arrNum);
      let max = Math.max(...arrNum);
      let arrNum2 =[];
      let val;
      let ans;
      let ans2;
      for(let i=min; i < max+1;i++){
        arrNum2.push(i)
      }
      for(let i=0; i < arrNum2.length; i++){
        if(arrNum.includes(arrNum2[i]) !== true) {
          val = arrNum2[i];
        }
      }
      if(typeof val !== "undefined") {
        ans = String.fromCharCode(val);
      } else {
        ans = undefined;
      }
      console.log(ans)
      return ans
    }
    
    fearNotLetter("bcdf");

    
