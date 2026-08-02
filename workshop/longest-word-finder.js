/**
 * User Stories:
 * You should create a function named findLongestWordLength that takes a string as an argument.
 * The function should return the length of the longest word in the string.
 */

function findLongestWordLength(str){
    let maxLanth = 0
    for (let word of str.split(' ')){
      if(maxLanth < word.length){
        maxLanth = word.length;
      }
    }

    return maxLanth
}
