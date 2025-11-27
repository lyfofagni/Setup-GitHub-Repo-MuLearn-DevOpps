function calculate(type) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);

  let result = "";

  if (type === "add") result = a + b;
  if (type === "sub") result = a - b;
  if (type === "mul") result = a * b;
  if (type === "div") result = b !== 0 ? a / b : "Cannot divide by zero!";

  document.getElementById("result").innerText = "Result: " + result;
}
