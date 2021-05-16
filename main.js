// VARIABLES
const userInput = document.getElementById('user-input');
const operator = document.querySelectorAll('.operator');
const btn = document.getElementById('submit');
const output = document.getElementById('output');
let userOperator;
let totalValue;

// EVENT LISTENER FOR EACH OPERATOR
operator.forEach((op) => {
  op.addEventListener('click', () => {
    userOperator = op.textContent;
    if (!totalValue) {
      totalValue = parseInt(userInput.value);
    }
    display();
  });
});

// EVENT LISTENER FOR SUBMIT
btn.addEventListener('click', calculate);

// CALCULATION FUNCTION
function calculate() {
  switch (userOperator) {
    case '+':
      totalValue = totalValue + parseInt(userInput.value);
      break;
    case '-':
      totalValue = totalValue - parseInt(userInput.value);
      break;
    case '*':
      totalValue = totalValue * parseInt(userInput.value);
      break;
    case '/':
      totalValue = totalValue / parseInt(userInput.value);
      break;
  }

  display();
}

// DISPLAY FUNCTION
function display() {
  userInput.value = '';
  output.textContent = totalValue;
}
