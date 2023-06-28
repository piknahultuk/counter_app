const number = document.getElementById("number");
const decreasenumber = document.getElementById("decrease-number");
const resetnumber = document.getElementById("reset-number");
const increasenumber = document.getElementById("increase-number");

resetnumber.addEventListener("click", reset);
decreasenumber.addEventListener("click", decrease);
increasenumber.addEventListener("click", increase);

function colorChecker() {
  if (parseInt(number.innerHTML) < 0) {
    number.style.color = "red";
  } else if (parseInt(number.innerHTML) > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}

function reset() {
  number.innerHTML = 0;
  colorChecker();
}

function decrease() {
  number.innerHTML = parseInt(number.innerHTML) - 1;
  colorChecker();
}
function increase() {
  number.innerHTML = parseInt(number.innerHTML) + 1;
  colorChecker();
}
