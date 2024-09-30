const display = document.getElementById("display");
const numberClicked = document.querySelectorAll(".btnN");
const resetBtn = document.querySelector(".resetBtn");
const percentualeBtn = document.querySelector(".percentualeBtn");
const operationButtons = document.querySelectorAll(".operationBtn");
const equalsBtn = document.querySelector(".equalsBtn");
const changeSign = document.querySelector(".change-sign");

let firstNumber = null;
let operator = null;

numberClicked.forEach((element) => {
  element.addEventListener("click", () => {
    display.value += `${element.textContent}`;
  });
});

resetBtn.addEventListener("click", () => {
  display.value = "";
  firstNumber = null;
  operator = null;
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.value) {
      firstNumber = parseFloat(display.value);
      operator = button.textContent;
      display.value = "";
    }
  });
});

percentualeBtn.addEventListener("click", () => {
  let number = parseFloat(display.value);
  if (!isNaN(number)) {
    display.value = number / 100;
  } else {
    display.value = "Errore";
  }
});

changeSign.addEventListener("click", () => {
  if (display.value) {
    firstNumber = parseFloat(display.value);
    firstNumber = -firstNumber;
    display.value = firstNumber;
  } else {
    display.value = "Errore";
  }
});

equalsBtn.addEventListener("click", () => {
  if (firstNumber !== null && operator && display.value) {
    const secondNumber = parseFloat(display.value);
    let result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "×":
        result = firstNumber * secondNumber;
        break;
      case "÷":
        result = firstNumber / secondNumber;
        break;
      default:
        result = "Errore";
    }

    display.value = result;
    firstNumber = null;
    operator = null;
  }
});
