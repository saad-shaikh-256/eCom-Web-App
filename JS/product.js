const minusBtn = document.querySelector('.minusBtn');
const plusBtn = document.querySelector('.plusBtn');
const display = document.getElementById('Display');

function updateDisplay(value) {
   display.textContent = value;
}

minusBtn.addEventListener('click', () => {
   let currentValue = parseInt(display.textContent);
   if (currentValue > 0) {
      currentValue -= 1; 
   }
   updateDisplay(currentValue); 
});

plusBtn.addEventListener('click', () => {
   let currentValue = parseInt(display.textContent);
   currentValue += 1; 
   updateDisplay(currentValue);
});