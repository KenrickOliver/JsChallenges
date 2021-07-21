// Find the Symmetric Difference
/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements 
which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements. S
o to evaluate an expression involving symmetric differences among three elements (A △ B △ C), y
ou must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. 
The returned array must contain only unique values (no duplicates).
*/
function symOfTwo(arr1, arr2) {
 const output = [];
 for (let el of arr1) {
     if(!output.includes(el) && !arr2.includes(el)) {
        output.push(el)
     }
 }

 for (let el of arr2) {
    if(!output.includes(el) && !arr1.includes(el)) {
       output.push(el)
    }
}
return output
}

function sym() {
    const arrOfArgs = [...arguments] 
}
  
  sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);