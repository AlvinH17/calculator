const display = document.getElementById("display");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const operators = ["+", "-", "*", "/", "."];
  if (operators.includes(key) || !isNaN(key)) {
    display.value += key;
  } else if (key === "Enter") {
    display.value = eval(display.value);
  } else if (key === "Backspace") {
    display.value = display.value.toString().slice(0, -1);
  } else if (key === "Escape") {
    display.value = "";
  }
});
