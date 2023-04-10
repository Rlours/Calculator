const numbers = document.querySelectorAll(".number");
const buttonAdd = document.querySelector(".div5");
const buttonSubstract = document.querySelector(".div9");
const buttonEqual = document.querySelector(".div20");
const display = document.querySelector(".display");
const resultDisplay = document.querySelector("#result_display");
const calculate = document.querySelector("#calculate");
const operators = document.querySelectorAll(".operator");

let firstNumber = null; // Variable to store the first number
let selectedOperator = null; // Variable to store the selected operator
let secondNumber = null;
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}

numbers.forEach((number) =>
  number.addEventListener("click", function () {
    let num = number.value;
    resultDisplay.textContent = num;
    if (selectedOperator === null) {
      // If no operator is selected, update the firstNumber
      firstNumber = parseFloat(num);
    } else {
      // If operator is selected, update the secondNumber
      secondNumber = parseFloat(num);
    }
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", function () {
    selectedOperator = operator.textContent;
    console.log(selectedOperator);
  })
);
function operate(first, operator, second) {
  if (operator === "+") {
    return add(first, second);
  } else if (operator === "-") {
    return substract(first, second);
  } else if (operator === "*") {
    return multiply(first, second);
  } else if (operator === "/") {
    return divide(first, second);
  }
}

calculate.addEventListener("click", function () {
  if (firstNumber !== null && secondNumber !== null) {
    let result = operate(firstNumber, selectedOperator, secondNumber);
    resultDisplay.textContent = result;
    selectedOperator = null;
    secondNumber = null;
  }
});
