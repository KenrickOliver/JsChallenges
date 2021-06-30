// Day 9 of JS Challenges
/* #1 - Pig Latin
   Pig Latin is a way of altering English Words. The rules are as follows:
   If a word begins with a consonant, take the first consonant or 
   consonant cluster, move it to the end of the word, and add "ay" to it.
   If a word begins with a vowel, just add "way" at the end.
  *** Assumption: Translate the provided string to Pig Latin. 
  Input strings are guaranteed to be English words in all lowercase.
  */

 function translatePigLatin(str) {
    let pattern = /^[aeiou]/ig; //pattern to test "Starts with(^)" vowel
    let pattern2 = /[aeiou]/ig; //pattern to search vowel ANYWHERE in str
    let newstr;
  
    if(pattern.test(str)) { //starts wth vowel just add "way" at the end EZ.
      newstr =  (str+'way');
    } else if(!pattern.test(str) && str.match(pattern2)) { 
      //if NOT start with vowel AND vowel mid way
      let char = str.split(pattern2)[0]; // split where the vowel was found
      let end = str.slice(char.length); // slice str to get the "end" portion
      newstr = end+char+'ay'; //add the 2 pieces together
    } else if(!pattern.test(str) && str.match(pattern2) === null){
      //lastly if NOT starts wth a vowel and no vowel midway
      newstr = (str+'ay'); // just add 'ay' to the end
    }
    
    return newstr;
  }
  
  translatePigLatin("schwartz");

  /* #2 - Seach and Replace
  Perform a search and replace on the sentence using the 
  arguments provided and return the new sentence.
 - First argument is the sentence to perform the search and replace on.
 - Second argument is the word that you will be replacing (before).
 - Third argument is what you will be replacing the second argument with (after).
*** Note:  Preserve the case of the first character in the original word 
    when you are replacing it. 
    For example if you mean to replace the word "Book" with the word "dog", 
    it should be replaced as "Dog"
    */

   function myReplace(str, before, after) {
    let arr = str.split(" ");
  
    let arr2 = arr.map((word) =>{
      if(word === before){
        if(word.charAt(0) === word.charAt(0).toUpperCase()){
          after = after.charAt(0).toUpperCase()+after.slice(1);
          word = after;
        } else if(word.charAt(0) === word.charAt(0).toLowerCase()) {
          after = after.charAt(0).toLowerCase()+after.slice(1);
          word = after;
        }
      }
      return word;
    })
    
    let str2 = arr2.join(" ")
   
    return str2;
    
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");