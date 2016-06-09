var romanArray = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM','M'];
var numberArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var input = parseInt($("form").val());
var newRomanArray = [];


var romanGenerator = function(input) {
  while (input > 0) {
    debugger;
    if (numberArray.includes(input)) {
      newRomanArray.push(romanArray[numberArray.indexOf(input)]);
      input -= input;
    } else if(!numberArray.includes(input)) {
      newRomanArray.push(romanArray[0]);
      input = input - numberArray.indexOf(input);
    }

  }
};

  // if (numberArray.includes(input)) {
  //   newRomanArray.push(romanArray[numberArray.indexOf(input)]); //Handles special cases
  // } else {
  //   while (input > 0) {  //handles 1-3
  //     newRomanArray.push(romanArray[0]);
  //     input-- ;
  //   } if(!numberArray.includes(input)) {
  //     newRomanArray.push(romanArray[0]);
  //     input--;
  //   }
  // }

// while (input>0) {
//   debugger;
//  if (input === 4)  {
//    newRomanArray.push(romanArray [1]);
//
//  } else {
//    newRomanArray.push(romanArray [0]);
//    input-- ;
//  }
// }

//
//
//
// ///when we turn results///
//   newRomanArray.join('');





// for (i>2, i)
// if (i % 3 === 0) {
//   newRomanArray.push(romanArray[i%3]);
// } else if (i % 3 === 1) {
//   newRomanArray.push(romanArray[i%3]);
// } else if (i % 3 === 2) {
//   newRomanArray.push(romanArray[i%3]);
// }
// };
