var romanArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var numberArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var answer = "";

var romanGenerator = function (input) {
  for (var i = 0; i < numberArray.length; i++) {
    debugger;
    while (input >= numberArray[i]) {
      answer = answer + romanArray[i];
      input = input - numberArray[i];
    }
  }
  return answer;
};
