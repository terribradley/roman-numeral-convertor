var romanArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var numberArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

var romanGenerator = function (input) {
  var answer = "";
  if (input >= 3999 || input <= 0) {
    alert('Please enter a nummber that is between 1 and 3,999');
  }
  for (var i = 0; i < numberArray.length; i++) {
    // debugger;
    while (input >= numberArray[i]) {
      answer = answer + romanArray[i];
      input = input - numberArray[i];
  }
  }
  return answer;
};

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var input = $('#user-input').val();

    $("#result").text(romanGenerator(input));
  });
});
