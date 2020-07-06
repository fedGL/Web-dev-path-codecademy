/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
*/
const reverseArray = array => {
  let reversedArray = [];
  for(let i = array.length-1; i >=0; i--){
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 

/*
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/

// Write your code here:
const greetAliens = array => {
  for(let i = 0; i < array.length; i++){
    console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
  }
}

// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

/*
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
*/

// Write your code here:
const convertToBaby = array => {
  for(let i = 0; i < array.length; i++){
    array[i] = 'baby '+array[i];
  }
  return array;
}

// When you're ready to test your code, uncomment the below and run:
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 

/*
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array results. We loop through the argument array and push in the smallest power of two which is greater than the current element.

It’s not doing what we want. Can you fix our code, please?
*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

/*
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
*/

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

/*
Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'
*/

// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

/*
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
*/
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
function squareNums(arr){
  return arr.map(x => x ** 2);
}

/*
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
*/
// Write your code here:
function shoutGreetings(arr){
  return arr.map(x => x.toUpperCase()+'!');
}


// Feel free to uncomment out the code below to test your function!
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
*/
// Write your code here:
function sortYears(arr){
  return arr.sort(function(a, b){return b-a});
}

// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/*
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
*/
// Write your code here:
function justCoolStuff(arr1,arr2) {
  return arr1.filter(word => arr2.includes(word));
}

// Feel free to uncomment the code below to test your function
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

/*
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
*/
// Write your code here:
function isTheDinnerVegan(arr){
  return arr.every(food => {return food.source == 'plant'});
}

// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

/*
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
*/
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortSpeciesByTeeth(arr) {
  return arr.sort((a,b) => {return a.numTeeth - b.numTeeth});
}

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

/*
Should print [
  { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]
*/

/*
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.
*/
// Write your code here:
function findMyKeys(arr) {
  return arr.indexOf('keys');
}

// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
*/

// Write your code here:
function dogFactory(name,breed,weight){
  if(typeof name == 'string' && typeof breed == 'string' && typeof weight == 'number'){
    return {
      _name: name, 
      _breed: breed, 
      _weight: weight,
      get name() {return this._name},
      get breed() {return this._breed},
      get weight() {return this._weight},
      set name(newName) {this._name = newName},
      set breed(newBreed) {this._breed = newBreed},
      set weight(newWeight) {this._weight = newWeight},

      bark() {return 'ruff! ruff!'},
      eatTooManyTreats() {this.weight = this.weight+1}
    };
  }
}
