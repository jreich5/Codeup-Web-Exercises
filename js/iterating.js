(function(){
  "use strict";

  // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
  var names = ["John", "Mary", "George", "Ringo"];
  // TODO: Create a log statement that will log the number of elements in the names array.
  
  for (var i = 0; i < names.length; i ++) {
    console.log("Your name is " + names[i]);
  }

  names.forEach(function (element, index, array) {
    console.log("Your name is " + element);
  });

  // declare and initialize array
  var shapes = ['square', 'rectangle', 'circle', 'triangle'];

  // loop through the array and log the values
  shapes.forEach(function (element, index, array) {

      // element is the shape name
      // index is the iterator
      // array is the shapes array itself

  console.log('The shape at index ' + index + ' is: ' + element);
});

})();
