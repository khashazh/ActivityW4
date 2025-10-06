function getInputValues() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    return { a, b };
}

// Function to display the result
function displayResult(result) {
    document.getElementById("result").textContent = `Result: ${result}`;
}

// Function to add
function add() {
    const { a, b } = getInputValues();
    displayResult(a + b);
}

// Function to subtract
function subtract() {
    const { a, b } = getInputValues();
    displayResult(a - b);
}

// Function to multiply
function multiply() {
    const { a, b } = getInputValues();
    displayResult(a * b);
}

// Function to divide
function divide() {
    const { a, b } = getInputValues();
    if (b !== 0) {
        displayResult(a / b);
    } else {
        displayResult("Error: Division by zero");
    }
}