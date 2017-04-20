//alert("Assignment 2");

var countOfSums = 0, sumOfNumbers = 0, averageOfNumbers = 0, newNumberOrString, fElement, countOfStrings = 0, concatenatedString = "";

function resetNumbers() {
  'use strict';
  countOfSums = 0;
  sumOfNumbers = 0;
  averageOfNumbers = 0;
  
  fElement = document.getElementById("countNumber");
  //window.console.log("countNumberEl: " + fElement);
  fElement.innerHTML = "  Count: " + countOfSums;
  
  fElement = document.getElementById("sumNumber");
  //window.console.log("sumNumberEl: " + fElement);
  fElement.innerHTML = "    Sum: " + sumOfNumbers;
  
  fElement = document.getElementById("averageNumber");
  //window.console.log("averageNumberEl: " + fElement);
  fElement.innerHTML = "Average: " + averageOfNumbers;
  
  event.preventDefault();
}

function calcNumbers() {
  'use strict';
  //alert("Got to calcNumbers" + "typeof newNumberOrString initially: " + typeof(newNumberOrString));
  
  //alert("newNumberOrString: " + newNumberOrString + " typeOf: " + typeof(newNumberOrString));
  countOfSums += 1;
  sumOfNumbers += parseFloat(newNumberOrString);
  if (sumOfNumbers <= 0) {
    averageOfNumbers = 0;
  } else {
    averageOfNumbers = sumOfNumbers / countOfSums;
  }
  
  fElement = document.getElementById("countNumber");
  fElement.innerHTML = "  Count: " + countOfSums;
  
  fElement = document.getElementById("sumNumber");
  fElement.innerHTML = "    Sum: " + sumOfNumbers;
  
  fElement = document.getElementById("averageNumber");
  fElement.innerHTML = "Average: " + averageOfNumbers;
  
  window.console.log("countOfSums: " + countOfSums);
  window.console.log("sumOfNumbers: " + sumOfNumbers);
  window.console.log("averageOfNumbers: " + averageOfNumbers);
  
  event.preventDefault();
}

function countStrings() {
  'use strict';
  concatenatedString += " " + newNumberOrString;
  
  fElement = document.getElementById("concatenatedString");
  fElement.innerHTML = concatenatedString;
  countOfStrings += 1;
  fElement = document.getElementById("stringCount");
  fElement.innerHTML = "Count: " + countOfStrings;
  window.console.log("concatenatedString: " + concatenatedString);
  window.console.log("countOfStrings: " + countOfStrings);
}

function newNumberOrStringCheck() {
  'use strict';
  //window.alert("got to newNumberOrStringCheck ");
  newNumberOrString = $('#numberOrString').val();
  
  //newNumberOrString = document.getElementById("numberOrString").value;
  window.console.log("newNumberOrString: " + newNumberOrString);
  window.console.log("typeof newNumberOrString: " + typeof newNumberOrString);

  if (isNaN(parseFloat(newNumberOrString)) && (typeof newNumberOrString === "string")) {
    countStrings();
  } else if (typeof parseFloat(newNumberOrString) === "number") {
    calcNumbers();
  } else {
    window.alert("Input must be a number or string!");
  }
  
  event.preventDefault();
}

$("#acceptNumbersAndStrings").submit(function (event) {
  'use strict';
  newNumberOrStringCheck();
  //window.alert("Handler for .submit() called.");
  event.preventDefault();
});