let firstNumber = 0;
let calc = null;
let secondNumber = 0;
let calcs = ["+", "-", "*", "/"];
let displayedNumber = "";

function updateNumber() {
    if (calc === null && firstNumber === -0) {
        displayedNumber = "-"
    }
    else if (calc === null) {
        displayedNumber = firstNumber
    }
    else if (calc === "+" && secondNumber === 0) {
        displayedNumber = firstNumber + " + "
    }
    else if (calc === "-" && secondNumber === 0) {
        displayedNumber = firstNumber + " - "
    }
    else if (calc === "*" && secondNumber === 0) {
        displayedNumber = firstNumber + " * "
    }
    else if (calc === "/" && secondNumber === 0) {
        displayedNumber = firstNumber + " / "
    }
    else if (calc === "+") {
        displayedNumber = firstNumber + " + " + secondNumber
    }
    else if (calc === "-") {
        displayedNumber = firstNumber + " - " + secondNumber
    }
    else if (calc === "*") {
        displayedNumber = firstNumber + " * " + secondNumber
    }
    else if (calc === "/") {
        displayedNumber = firstNumber + " / " + secondNumber
    }
    document.getElementById("display").textContent = displayedNumber;
}

function insertNumber(number) {
    if (displayedNumber === "-") {
        firstNumber = firstNumber * 10 - number;
        updateNumber();
    }
    else if (calc === null && firstNumber < 0) {
        firstNumber = firstNumber * 10 - number;
        updateNumber();
    }
    else if (calc === null) {
        firstNumber = firstNumber * 10 + number;
        updateNumber();
    }
    else {
        secondNumber = secondNumber * 10 + number;
        updateNumber();
    }
}

function insertFunction(symbol) {
    if (symbol === "plus") {
        calc = "+";
        updateNumber();
    }
    else if (symbol === "minus") {
            if (firstNumber === 0) {
                firstNumber = -0;
                updateNumber();
            }
            else {
                calc = "-";
                updateNumber();
            }
    }
    else if (symbol === "times") {
        calc = "*";
        updateNumber();
    }
    else if (symbol === "divide") {
        calc = "/";
        updateNumber();
    }
    else if (symbol === "erase") {
        firstNumber = 0;
        calc = null;
        secondNumber = 0;
        document.getElementById("display").textContent = firstNumber;
    }
    else if (symbol === "equal")
        if (calc === "+") {
            document.getElementById("display").textContent = firstNumber + secondNumber;
            firstNumber = firstNumber + secondNumber;
            secondNumber = 0;
            calc = null;
        }
        else if (calc === "-") {
            document.getElementById("display").textContent = firstNumber - secondNumber;
            firstNumber = firstNumber - secondNumber;
            secondNumber = 0;
            calc = null;

        }
        else if (calc === "*") {
            document.getElementById("display").textContent = firstNumber * secondNumber;
            firstNumber = firstNumber * secondNumber;
            secondNumber = 0;
            calc = null;
        }
        else if (calc === "/") {
            document.getElementById("display").textContent = firstNumber / secondNumber;
            firstNumber = firstNumber / secondNumber;
            secondNumber = 0;
            calc = null;
        }
}