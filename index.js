// higher order functions -- functions that take other functions as input

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return Math.abs(num1 - num2);
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function modulo(num1, num2) {
  return num1 % num2;
}

//calculator is a higher order function as it is taking operator(another function) as an input

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

//to check it step by step or to debug it, enter into debugger mode by writing:
//debugger;
//function name
//eg

//debugger;
//calculator(1,2,add);
