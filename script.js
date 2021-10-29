const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const input = document.querySelector('.input-box');
const displayValue = document.querySelector('.display-number');

let total = 0;
add.addEventListener('click', (e) => {
  e.preventDefault();
  total = parseFloat(total) + parseFloat(input.value);
  if (input.value + total > 0) {
    displayValue.textContent = ` ${total}`;
  } else {
    displayValue.textContent = ` ${total}`;
  }
  input.value = '';
});

subtract.addEventListener('click', (e) => {
  e.preventDefault();
  total -= input.value;

  if (input.value - total < 0) {
    displayValue.textContent = `- ${total}`;
  } else {
    displayValue.textContent = ` ${total}`;
  }
  input.value = '';
});
