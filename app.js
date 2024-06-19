function cal() {
  let num1 = parseInt(document.getElementById("no1").value);
  let num2 = parseInt(document.getElementById("no2").value);

  let sum = num1 + num2;

  document.getElementById("output").innerText = parseInt(sum);
}
