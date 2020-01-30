/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

 /*solution code for personal reference*/

 //var commonCharacters = function(string1, string2) {
//  //store each character in the string in an object
//  var str1 = string1.split(' ');
//  var str2 = string2.split(' ');
//  //loop through each string
//  var letters = str1.reduce(function(obj, letter) {
//      if(letter.match(/[a-z]/i)) {
//          obj[letter] = 1;
//      }
//      return obj;
//  }, {});
//  //if the letter is included in all strings, reduce and return.
//
//  string1.reduce(function(soFar, letter) {
//      if(letters[letter] === 2) {
//          soFar += letter;
//          letters[letter] = letters[letter] - 1;
//      }
//      soFar;
//  }, '');
//};


/*original solution*/
var commoncharacters = function(str1, str2) {
    var commons = [];
    var string1 = str1.slice();
    var string2 = str2.slice();
    
    for(var i = 0; i < string1.length; i++) {  
            var str1Index = string1[i];  
                for(var i = 0; i < string2.length; i++) {
                    var str2Index = string2[i];
                    if(str1Index === str2Index) {
                    commons.push(str1Index)
                }
            }
        
        }
    
    return commons.join()
}

console.log(commoncharacters('acexivou', 'aegihobu'))
