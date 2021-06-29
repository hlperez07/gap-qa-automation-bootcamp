/*
Count the number of Duplicates 
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string.
 The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicates(data){
    return(
        data.toLowerCase()
        .split('')
        .sort()
        .join('')
        .match(/([^])\1+/g) || [])
        .length;
  }
  
duplicates('ABCAB');
