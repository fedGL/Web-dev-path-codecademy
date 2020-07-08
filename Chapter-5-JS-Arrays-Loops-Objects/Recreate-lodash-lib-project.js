const _ = {

  /* STRING METHODS */

  clamp(target,lowBound,upperBound) {
    // if target < lowBound, return lowBound
    // if target > upperBound, return upperBound
    // if target inside bounds, return target
    if(target > upperBound) return upperBound;
    if(target < lowBound) return lowBound;
    return target;
  },

  inRange(num,start,end) {
    // if end not provided, end = start, start = 0
    // if start > end, swap values
    // if start < num < end, return true
    // Note: start value range is inclusive

    // Check if end was provided 
    if(!end){
      end = start;
      start = 0;
    }
    // Check if (start, end) need to be swapped
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    // Check if num is within bounds
    if(num < start || num >= end){ return false; }
    return true;
  },
  words(str) {
    // Take a string, split it into an array of words
    // A word is defined as space-separated
    return str.split(' ');
  },
  
  pad(str,totalLength) {
    // Add spaces evenly to both sides of string until str.length == totalLength 
    // If needed padding odd, extra padding goes to end

    let neededPadding = totalLength - str.length;
    
    // trivial cases
    if (str.length === totalLength || totalLength === 0 || neededPadding < 0) {
      return str;
    }

    let padding = ' '.repeat(Math.floor(neededPadding/2));
    if (neededPadding % 2 === 0){
      str = padding + str + padding;
    } else {
      // this means neededPadding is odd
      str = padding + str + padding + ' ';
    }
    return str;
  },

  /* OBJECT METHODS */

  has(obj,key) {
    // Check if provided object has value at given key
    // return true if yes, false if not
    // only check for unnested values
    if(obj[key]) {return true;}
    return false;
  },

  invert(obj){
    // Iterate through object, invert key,value pairs
    for (let key in obj) {
      let temp = obj[key];
      delete obj[key];
      obj[temp] = key;
    }
  },

  findKey(obj,func){
    // func is a predicate function
    // iterate obj, call func with each value
    // return first key that returns truthy from the call
    // return undefined if no values return truthy
    for (let key in obj){
      if (func(obj[key])) {return key;}
    }
    return undefined;
  },

  /* ARRAY METHODS */

  drop(arr,num){
    // Drop num items from the front of arr
    // if num not specified, drop 1 item
    // Return new array
    if(!num) {return arr.slice(1);}
    return arr.slice(num);
  },

  dropWhile(arr,func){
    // func is a predicate function
    // func takes (currentElement,currentIdx,arr)
    // Copy arr into new array
    // Drop elements from new array from the front
    // Stop drop if value at index makes func return falsy
    let solArray = [];
    let currentIdx = 0;
    for (currentIdx; currentIdx < arr.length; currentIdx++){
      if(!func(arr[currentIdx],currentIdx,arr)) {break;}
    }
    solArray = arr.slice(currentIdx);
    return solArray;
  },

  chunk(arr,size=1){
    // Break arr into arrays of length size
    // Return array containing all array chuncks
    // If arr can't be broken evenly, last chunch is smaller
    // if size is undefined, size is set to 1
    let solArr = [];
    let currentIdx = 0;
    if(size === 1) {return [arr];}

    /*
    No need to check if arr can be split evenly by size
    because .slice() will already make a smaller array
    at the end if end arg goes beyond target array.
    */
    for(currentIdx;currentIdx < arr.length;currentIdx = currentIdx+size){
      solArr.push(arr.slice(currentIdx,currentIdx+size));
    }
    return solArr; 
  }
};













// Do not write or modify code below this line.
module.exports = _;