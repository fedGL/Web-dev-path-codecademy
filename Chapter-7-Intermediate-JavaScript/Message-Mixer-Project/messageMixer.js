/*
Message Mixer is a messaging service that allows you to perform an action on input text and display the output of that behavior to the console. For example, with the current functions defined in Message Mixer, you can:

count the characters in a message
capitalize the first character of words
reverse a message’s words in place
reversing characters in place
replace the first occurrence of a string
replace all occurrences of a string
encode text by swapping certain characters for other characters
At present, Message Mixer runs as a program in a single file. This single file includes functions that define behavior as well as the output. Message Mixer knows that by extracting the functions into a module, logic can be reused in different parts of our application.

Let’s help Message Maker turn the program into a module!

Segment the text-transformation behavior that should be kept within the module messageMixer.js, and the output behavior that should exist within message.js.
*/

// Define an object that will carry the functionality as a module
// Will need to refactor functions so that they are properties of the object
let MessageMixer = {};

MessageMixer.countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

MessageMixer.capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


MessageMixer.reverseWord = function(word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};


MessageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


MessageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

MessageMixer.palindrome = function(str){
  return `${str} ${MessageMixer.reverseWord(str)}`;
};

MessageMixer.pigLatin = function(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};

// Export the object module
// Another way to export: export default MessageMixer;
module.exports = MessageMixer;

