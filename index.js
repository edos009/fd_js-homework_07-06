//First Example
const getUserInputNumber = function () {
  return prompt("Enter your number: ");
};

const checkIsValueNotNumber = function (number) {
  return number === null || number === "" || isNaN(number);
};

const guessHiddenNumber = function () {
  let tryValue = 0;
  while (true) {
    const userInputNumber = getUserInputNumber();
    if (checkIsValueNotNumber(userInputNumber)) {
      alert("You didn't enter a number, please try again");
      tryValue++;
    } else {
      if (Number(userInputNumber) > SECRIT_PIN) {
        tryValue++;
        alert("The number must be less, please try again");
      } else if (Number(userInputNumber) < SECRIT_PIN) {
        tryValue++;
        alert("The number must be greater, please try again");
      } else {
        tryValue++;
        alert("Congratulations, you guessed it in " + tryValue + " attempts");
        break;
      }
    }
  }
};

guessHiddenNumber();

//Second Example
/*
const getUserInputNumber = function () {
  return prompt("Enter your number: ");
};

const guessHiddenNumber = function () {
  let tryValue = 0;
  while (true) {
    const userInputNumber = getUserInputNumber();
    if (
      userInputNumber === null ||
      userInputNumber === "" ||
      isNaN(userInputNumber)
    ) {
      alert("You didn't enter a number, please try again");
      tryValue++;
    } else {
      if (Number(userInputNumber) > SECRIT_PIN) {
        tryValue++;
        alert("The number must be less, please try again");
      } else if (Number(userInputNumber) < SECRIT_PIN) {
        tryValue++;
        alert("The number must be greater, please try again");
      } else {
        tryValue++;
        alert("Congratulations, you guessed it in " + tryValue + " attempts");
        break;
      }
    }
  }
};

guessHiddenNumber();
*/

