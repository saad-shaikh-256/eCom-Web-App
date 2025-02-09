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

document.addEventListener('DOMContentLoaded', function () {
   const detailElement = document.getElementById('detail');
   const originalText = detailElement.innerHTML;

   if (detailElement.scrollHeight > detailElement.clientHeight) {
      detailElement.innerHTML = originalText.substr(0, 200) + '...<span class="read-more"> Read More</span>';

      const readMoreLink = document.querySelector('.read-more');
      readMoreLink.addEventListener('click', function () {
         if (detailElement.classList.contains('full-text')) {
            detailElement.classList.remove('full-text');
            readMoreLink.textContent = ' Read More';
         } else {
            detailElement.classList.add('full-text');
            readMoreLink.textContent = ' Read Less';
         }
      });
   }
});
