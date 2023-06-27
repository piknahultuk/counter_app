const number = document.getElementById("number");
const decreasenumber = document.getElementById("decrease-number");
const resetnumber = document.getElementById("reset-number");
const increasenumber = document.getElementById("increase-number");

resetnumber.addEventListener("click", reset);
decreasenumber.addEventListener("click", decrease);
increasenumber.addEventListener("click", increase);

function reset() {
  number.innerHTML = 0;
}

function decrease() {
  number.innerHTML = parseInt(number.innerHTML) - 1;
}
function increase() {
  number.innerHTML = parseInt(number.innerHTML) + 1;
}
