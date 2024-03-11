const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const num = document.querySelector(".num");
const reset = document.querySelector(".reset-btn");
const icon = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");

icon.onclick = function () {
  icon.classList.toggle("active");
  sidebar.classList.toggle("active");
};

incrementBtn.addEventListener("click", function increment() {
  let total = 0;
  const counterValue = num.innerText;
  total = Number(counterValue) + 1;
  num.innerText = total;
});

decrementBtn.addEventListener("click", function decrement() {
  let total = 0;
  const counterValue = num.innerText;
  total = Number(counterValue) - 1;
  num.innerText = total;
});

reset.addEventListener("click", function reset() {
  num.innerText = 0;
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 40) {
    navbar.style.backgroundColor = "#f27168";
  } else {
    navbar.style.backgroundColor = "";
  }
});
