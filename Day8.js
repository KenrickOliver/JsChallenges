// Day 8 of JS Challenges

/* #1 - Spinal Tap Case
    Convert a string to spinal case. 
    Spinal case is all-lowercase-words-joined-by-dashes
*/

function spinalCase(str) {
    // We replace all underscore and dashes and convert to an array  
    let arr = str.replace(/[_\-]/g, " ").split(" ");
    
    // Check for multiple words together my matching uppercase and then separating
    let arr2 = arr.map((val) => {
      let val2 = val.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1);
      return val2
    });
    // Since .match returns arrays we flatten to single array and map over values to lowercase
    
    let arr3 = arr2.flat().map((val)=> {
      val = val.toLowerCase();
      return val;
    })
    
    //convert back to string and return string
    let str3 = arr3.join("-")
    return str3;
  }
  
  spinalCase('The_Andy_Griffith_Show');

  /* #2 - Opposite House
    Create a function that takes a house number house and 
    length of the street n and returns the house number on the opposite side.
    1 |   | 6

    3 |   | 4

    5 |   | 2
  */

 function oppositeHouse(house, n) {
	let arrEve = [];
	let arrOdd = [];
	
	for(let i=0; i<(n*2+1);i++){
		if(i%2 !== 0){
			arrOdd.push(i);
		} else if (i%2 === 0){
			arrEve.unshift(i);
		}
	}
	
	if(house%2 === 0) {
		//houseEve = arrEve.indexOf(house);
		return arrOdd[arrEve.indexOf(house)];
		
	} else if (house%2 !== 2){
		//houseOdd = arrOdd.indexOf(house);
		return arrEve[arrOdd.indexOf(house)];
	}
	
}