// Function to append value to the result input
function appendToResult(value) {
    document.getElementById("result").value += value;
}

// Function to clear the result input
function clearResult() {
    document.getElementById("result").value = '';
}

// Function to calculate the result
function calculateResult() {
    const resultField = document.getElementById("result");
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

