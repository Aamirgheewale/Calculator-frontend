document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    const number1 = parseFloat(document.getElementById("firstnumber").value);
    const number2 = parseFloat(document.getElementById("secondnumber").value);
    const operator = document.getElementById("operator").value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        case "^":
            result = Math.pow(number1, number2);
            break;
        default:
            alert("Invalid operator.");
            return;
    }

    document.getElementById("result").value = result;
});
