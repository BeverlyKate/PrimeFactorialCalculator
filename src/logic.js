$(document).ready(function () {
  var result;

  //logic for prime button
  $("#Btn-Prime").click(function () {
    const input = getInput();

    if (input == 1) {
      result = "1 is not prime, nor is it a composite number."; //this could have been handled better setting isPrime to have 3 values (1,2,3) rather than having it be a boolean.
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
    addToHistory(getFactorialNaive(input));
  });

  ////helper functions/////

  //Reusable function that gets the user input
  function getInput() {
    return $("#numberInput").val();
  }

  //Adds the results to the front end.
  function addToHistory(result) {
    var resultHolder = `<div id="resultHistory"> ${result}</div>`;
    $("#resultHolder").append(resultHolder);
  }

  //this function is the logic to see if the given input is prime or not.
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
  //The AKS test is a 100% accurate way to determining if a number is prime or not, published in a paper in 2004.
  //The idea is to take the number p, and create p rows of Pascal's triangle.
  //If all the numbers/coefficients (in the context of polynomials) are divisible by the given number p, then the number is prime.
  //source: https://youtu.be/HvMSRWTE2mI?si=w2ueYq6DA2Q6ejVl
  function AKStest(input) {
    var coefArr = [1];
    var isDivisible = true;
    //to solve this, i broke the problem down into two parts: generating the pascal triangle and then evaluating if the lowest row is
    //task: expand (x-1)^p where p= input.
    for (let i = 0; i < input; i++) {
      coefArr = evaluateRow(coefArr);
    }

    //check if coefArr is divisible by the input
    var i = 1;
    while (isDivisible && i <= coefArr.length - 2) {
      //while loop used to escape the function early as soon as at least one non-divisible coefficient is encountered.
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

  //evaluate row is a helper function used in the AKS test. it forms the pascal triangle used in expanding polynomials.
  function evaluateRow(array) {
    var nextRow = [];
    for (let i = 0; i < array.length; i++) {
      //for all indeces of the previous row, except for the outermost edges (1 and 1)
      if (i == 0) {
        nextRow.push(1);
      } else {
        nextRow.push(array[i - 1] + array[i]); //add the two numbers above the current index, you cen see my logic in the google drive
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
