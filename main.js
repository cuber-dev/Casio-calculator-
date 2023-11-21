let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let calculatorState = "0";

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button.value);
    updateDisplay();
  });
});

function handleButtonClick(value) {
  if (value === "C") {
    calculatorState = "0";
  } else if (value === "DE") {
    calculatorState = calculatorState.slice(0, -1);
  } else if (value === "=") {
    try {
      let expression = calculatorState.replace('x', '*');
      let result = Function('"use strict";return (' + expression + ')')();
      calculatorState = String(result).includes('+') || String(result).includes('e') ? result : result.toLocaleString();
    } catch (e) {
      calculatorState = 'Invalid expression';
    }
  } else {
    if (calculatorState === "0" || calculatorState === "Invalid expression") {
      calculatorState = value;
    } else {
      const lastOperator = calculatorState.slice(-1);
      const isOperator = lastOperator === '.' || lastOperator === '+' || lastOperator === '-' || lastOperator === '/' || lastOperator === '%' || lastOperator === 'x';
      const isBtnValueOperator = value === '.' || value === '+' || value === '-' || value === '/' || value === '%' || value === 'x';

      calculatorState = isOperator && isBtnValueOperator ? calculatorState.slice(0,-1) + value : calculatorState + value;
    }
  }
}

function updateDisplay() {
  display.innerText = calculatorState;
}
