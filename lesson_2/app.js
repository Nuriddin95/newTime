// DOM Elements
const counterCount = document.querySelector(".counter__count"),
// counterMinusBtn = document.querySelector(".counter__decrement-btn");
counterPlusBtn = document.querySelector(".counter__increment-btn"),
pauseId = document.getElementById("pause");

// Состояние
let count = 1000;
let plus;


function render(element, count) {
  element.innerText = count;
}

function decrement() {
  count = count - 1;
  render(counterCount, count);
}

function increment() {
  count = count + 1;
  render(counterCount, count);
}

counterPlusBtn.addEventListener('click', function() {
      plus = setInterval(function () {
      count += 1;
      counterCount.textContent = count;
    }, 1000);
});

pauseId.addEventListener('click', function() {
  clearInterval(plus); 
});


// time = ms | 1sec = 1000ms

// Add button listeners
// counterMinusBtn.addEventListener('click', decrement)
//

// Initial state
render(counterCount, count);