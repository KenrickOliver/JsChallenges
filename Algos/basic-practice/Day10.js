// Day 10 of JS Challenges
/* #1- DNA Pairing
    The DNA strand is missing the pairing element. 
    Take each character, get its pair, and return the results as a 2d array.
    Base pairs are a pair of AT and CG.
    Match the missing element to the provided character.

    Return the provided character as the first element in each array.

    For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

    The character and its pair are paired up in an array, 
    and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
    let arr = str.split("");
    let arr2 = arr.map((letter) => {
      if(letter === 'A'){
        return [letter, "T"]
      }
      if(letter === 'T'){
        return [letter, "A"]
      }
      if(letter === 'C'){
        return [letter, "G"]
      }
      if(letter === 'G'){
        return [letter, "C"]
      } 
    })
    console.log(arr2)
    return arr2;
  }
  
  pairElement("GCG");
  