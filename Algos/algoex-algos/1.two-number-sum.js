// Two Number Sum 
/* 
    Write a function that takes in a non-empty array of distinct integers and an integer representing a traget sum.
    if any two numbers in teh input array sum/add up to the target sum, thje function should return them in an array, in any order. 
    if no two numbers sum up to the target sum, the function should retun an empty array.

    Note that the target sum has to be obtaine by summing two differnt integers in the array; you can't add a single integer to itself
    in order to obrtain the targert sum.

    ** Assumptions:
    Arry will NOT be empty
    You can assume that there will be at most ONE PAIR of numbers summin up to the traget sum.
*/

// Solution 1: Brute force solution at first try
/* This solution works but is O(n^2) time complexity becasue of the nested loops. 
O(1) space complexity becase nothing is being added to memory(nos has table).
*/
function twoNumberSum(array, targetSum) {
	let arr2 = [];
	for(let i = 0; i<array.length; i++) {
		for(let j = i+1; j<array.length; j++){
			let num  = array[i] + array[j]
			if(num === targetSum) {
				if(!arr2.includes(array[i])){
					arr2.push(array[i])
				}
				if(!arr2.includes(array[j])){
					arr2.push(array[j])
				}
				
			} 
		}
	}
	console.log(arr2)
	return arr2
}

/* The above solution works but is O(n^2) time complexity becasue of the nested loops. 
O(1) space complexity becase nothing is being added to memory.
*/

// Solution 2: 
/* This solution is better than the above solution because it is O(n) time complexity, only ONE loop. 
 O(n) space complexity because adding to memory.
*/
function twoNumberSum(array, targetSum) {
	const nums = {}; // a STORE of values (hash table)
    for (const num of array) {  // loop through the array 
        const potentialMatch = targetSum - num;  // targetSum = x + y | so solve for x? SO targetSum - y = X
        if (potentialMatch in nums) { // is potentiolMatch already in our STORE of values ?
            return [potentialMatch, num]; //yes? then return the potential match + the num it matched with
        } else {
            nums[num] = true; // ADD the value to our nums object so nums = {num: true} and keep going
        }
    }
    return [];    
}

//Solution 3: Same as above solution but instead of usine an object we are just using an array as our STORE of value
function twoNumberSum(array, targetSum) {
	let arr2 = [];
	if (array.length === 1) {
		return arr2
	} else {	
	for (let i = 0; i < array.length; i++) {
			const potentialMatch = targetSum - array[i]
			if(arr2.includes(potentialMatch) === true) {
				return [potentialMatch, array[i]]
			} else {
				arr2.push(array[i])
            }
		}
	}
	return [];
}
