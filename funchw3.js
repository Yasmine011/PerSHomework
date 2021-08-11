// Question 3 Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var prompt = require('prompt-sync')()
var userInput = prompt('Please enter a letter from A-Z ')

function isCharacterAVowel(x) {
    vowels = 'aeiou'
    vo = false
    for(i=0; i < vowels.length; i++){
        {if ( x.toLowerCase() == vowels[i])
            return true;}
    }
    return vo
}
console.log(isCharacterAVowel(userInput))