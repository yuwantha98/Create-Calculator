function cal() {
  let num1 = parseInt(document.getElementById("no1").value);
  let num2 = parseInt(document.getElementById("no2").value);
  let operator = document.getElementById("cars").value;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("output").innerText = parseInt(result);
}
