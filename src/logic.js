$(document).ready(function () {
  var result;

  //logic for prime button
  $("#Btn-Prime").click(function () {
    const input = getInput();

    if (input == 1) {
      result = "1 is not prime, nor is it a composite number.";
    } else {
      result = isItPrime(input);
    }

    console.log(result);
    addToHistory(result);
  });

  //Listens for when the factorial button is pressed, triggering the logic to calculate it.
  $("#Btn-Factorial").click(function () {
    const input = getInput();
    console.log(getFactorialNaive(input));
  });

  //helper functions
  function getInput() {
    return $("#numberInput").val();
  }

  function addToHistory(result) {
    var resultHolder = `<div id="resultHistory"> ${result}</div>`;
    $("#resultHolder").append(resultHolder);
  }

  function isItPrime(input) {
    var isPrime;
    if (input <= 1) {
      isPrime = false;
      console.log(input + " is not a natural number.");
    } else if (input % 2 == 0 && input != 2) {
      isPrime = false;
      console.log(input + " is an even number that isn't 2");
    } else if (AKStest(input) == true) {
      isPrime = true;
    }

    if (isPrime) {
      return input + " is prime!";
    } else {
      return input + " is composite!";
    }
  }

  function AKStest(input) {
    var coefArr = [1];
    var isDivisible = true;

    //task: expand (x-1)^-(x^p-1) where p= input.
    for (let i = 0; i < input; i++) {
      coefArr = evaluateRow(coefArr);
    }

    //check if coefArr is divisible by the input
    var i = 1;
    while (isDivisible && i <= coefArr.length - 2) {
      if (coefArr[i] % input != 0) {
        isDivisible = false;
        console.log(coefArr[i]);
      }
      i++;
    }
    console.log(coefArr);
    console.log(isDivisible);
    return isDivisible;
  }

  function evaluateRow(array) {
    var nextRow = [];
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        nextRow.push(1);
      } else {
        nextRow.push(array[i - 1] + array[i]);
      }
    }
    nextRow[nextRow.length] = 1;
    console.log(nextRow);
    return nextRow;
  }

  function getFactorialNaive(input) {
    var factorial = 1;

    for (let i = 2; i <= input; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
});
