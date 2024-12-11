const display = document.getElementById('display');
const buttons = document.getElementsByClassName("btn");
const actionButton=document.getElementsByClassName("btn1")[0];

let currentInput = '';
let previousInput = '';
let operation = null; 

let flag = true;
const open_close = () => {
    
    if (flag) {
      actionButton.innerHTML = "ON";
      clearDisplay();
      actionButton.style.backgroundColor = "red";

      for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        flag = !flag;
    } else {
      actionButton.innerHTML = "OFF";
      actionButton.style.backgroundColor ="#407e36";

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
        flag = !flag;
    }
}





function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function chooseOperation(op) {


  if (currentInput === '') return;
  if (previousInput !== '') {
    computeResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function computeResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {

      
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        display.value="Cannot divide by zero"
        // setInterval(clearDisplay, 2000);
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}
