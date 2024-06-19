function cal() {
  const num1 = document.getElementById("no1").value;
  const num2 = document.getElementById("no2").value;

  const sum = num1 + num2;

  document.getElementById("output").innerText = "Result: " + sum;
}
