(function() {
  'use strict';

  window.functions = {};
// functions!


//here is an example of a function that adds two numbers. Write your functions following this example.

// functions.addTwoNums = function(a , b){
//   return a + b;
// }
//functions.addTwoNums(1, 2) // 3


// 1. Create a function named functions.subtract that takes two parameters and subtracts one number from another and returns the result

  //Ex: functions.subtract(5, 2) // 3

// Your code here!




// 2. Create a function named functions.modulo that takes two parameters and returns the remainder when one number is divied by another
// If you're not familiar with the modulo operator, check out the docs here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

  //Ex: functions.modulo(9, 4) // 1

// Your code here!




// 3. Create a function named functions.multiply that takes four parameters and multiplies the first two parameters together and returns the result
// 

  //Ex: functions.multiply(1, 2) // 2

// Your code here!




// use the students array and oaklandStreets object for the following challenges:
var students = ['jonathan', 'jeff', 'charlie', 'charles', 'levio'];

var oaklandStreets = {
  telegraph: '19th street',
  bancroft: '10th street',
  international: '14th street',
  fruitvale: 'diamond district'
}

// 4. Create a function named functions.imHere that creates and returns a new array. Within the function, iterate through the students array and use the .push() method to add each student to the new array.

// Your code here!





// 5. Create a function named functions.placesIveBeen that creates and returns a new array. Within the function, iterate through the oaklandStreets array and use the .push() method to add each place (value only) to the new array.

// Your code here!





// the following line creates a copy of the students array. Don't modify this line!
var newStudents = students.slice();
// 6. Create a function named functions.findLevio that iterates through the newStudents array and checks if the current student is levio. If so, return levio. If the current student is not levio, use the .push() method to add another student to the newStudents array.

// Your code here!





// 7. Create a function named functions.dudeWheresMyCar that returns the location of my car. The function should take in a name and a location, and it should return a string that concatenates the arguments together.

//Ex: functions.dudeWheresMyCar('Kristina', 'New Zealand') // 'Kristina left the car in New Zealand'

// Your code here!





// 8. Invoke the functions.dudeWheresMyCar function and pass in Shanna and California as the arguments.
functions.invokeDudeWheresMyCar = function() {
  // Your code here!

}

// 9. Invoke the functions.modulo function so that it returns the remainder when 15 is divided by 4
functions.invokeModulo = function() {
  // Your code here!
  
}
// 10. Invoke the functions.multiply so that it returns the value when multiplying 25 and 43
functions.invokeMultiply = function() {
   // Your code here!
  
}
// 11. Invoke the functions.subtract so that it returns the value when subtracting 72 from 238
functions.invokeSubtract = function() {
   // Your code here!
  
}

}());


