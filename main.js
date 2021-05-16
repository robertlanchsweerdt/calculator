const userInput = document.getElementById('user-input');
const operator = document.querySelectorAll('.operator');
const btn = document.getElementById('submit');
const output = document.getElementById('output');
let userOperator;
let totalValue = 0;

operator.forEach((op) => {
  op.addEventListener('click', () => {
    userOperator = op.textContent;
    totalValue = parseInt(userInput.value);
    display();
  });
});

btn.addEventListener('click', calculate);

function calculate() {
  if (!userInput.value) return;

  console.log(typeof userOperator, userOperator);

  switch (userOperator) {
    case '+':
      totalValue = totalValue + parseInt(userInput.value);
      break;
    case '-':
      totalValue = totalValue - parseInt(userInput.value);
    case '*':
      totalValue = totalValue * parseInt(userInput.value);
    case '/':
      totalValue = totalValue / parseInt(userInput.value);
  }

  display();
}

function display() {
  userInput.value = '';
  console.log(totalValue);
  output.textContent = totalValue;
}
