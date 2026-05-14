let firstNumber = 0;
let calc = null;
let secondNumber = 0;
let calcs = ["+", "-", "*", "/"];
let displayedNumber = "";
let decimalMode = false;
let decimalPlace = 10;

function updateNumber() {
    if (decimalMode === true && calc === null && decimalPlace < 11) {
        displayedNumber = firstNumber + ".";
    }
    else if (decimalMode === true && calc === null && decimalPlace > 11) {
        displayedNumber = firstNumber;
    }
    else if (calc === null && firstNumber === -0) {
        displayedNumber = "-"
    }
    else if (calc === null && decimalMode === false) {
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
        if (decimalMode === true && decimalPlace < 11) {
            displayedNumber = firstNumber + " + " + secondNumber + ".";
        }
        else {
            displayedNumber = firstNumber + " + " + secondNumber
        }
    }
    else if (calc === "-") {
        if (decimalMode === true && decimalPlace < 11) {
            displayedNumber = firstNumber + " - " + secondNumber + ".";
        }
        else {
            displayedNumber = firstNumber + " - " + secondNumber
        }
    }
    else if (calc === "*") {
        if (decimalMode === true && decimalPlace < 11) {
            displayedNumber = firstNumber + " * " + secondNumber + ".";
        }
        else {
            displayedNumber = firstNumber + " * " + secondNumber
        }
    }
    else if (calc === "/") {
        if (decimalMode === true && decimalPlace < 11) {
            displayedNumber = firstNumber + " / " + secondNumber + ".";
        }
        else {
            displayedNumber = firstNumber + " / " + secondNumber
        }
    }
    document.getElementById("display").textContent = displayedNumber;
}

function insertNumber(number) {
    if (displayedNumber === "-") {
        firstNumber = firstNumber * 10 - number;
        updateNumber();
    }
    else if (displayedNumber === firstNumber + ".") {
        let temporaryValue = number / decimalPlace + firstNumber;
        firstNumber = parseFloat(temporaryValue.toFixed(Math.log10(decimalPlace))); //toFixed tranforms the number in a string then parseFloat makes it a number again, Math.log10(decimalPlace) is counting how many number post the dot we have
        decimalPlace = decimalPlace * 10;
        updateNumber();
    }
    else if (calc === null && decimalMode === true) {
        let temporaryValue = number / decimalPlace + firstNumber;
        firstNumber = parseFloat(temporaryValue.toFixed(Math.log10(decimalPlace))); 
        decimalPlace = decimalPlace * 10;
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
        if (displayedNumber === firstNumber + " + " + secondNumber + "." || displayedNumber === firstNumber + " - " + secondNumber + "." || displayedNumber === firstNumber + " * " + secondNumber + "." || displayedNumber === firstNumber + " / " + secondNumber + ".") {
            let temporaryValue = number / decimalPlace + secondNumber;
            secondNumber = parseFloat(temporaryValue.toFixed(Math.log10(decimalPlace))); 
            decimalPlace = decimalPlace * 10;
            updateNumber();
        }
        else if (decimalMode === true) {
            let temporaryValue = number / decimalPlace + secondNumber;
            secondNumber = parseFloat(temporaryValue.toFixed(Math.log10(decimalPlace))); 
            decimalPlace = decimalPlace * 10;
            updateNumber();
        }
        else {
            secondNumber = secondNumber * 10 + number;
            updateNumber();
        }
    }
}

function insertFunction(symbol) {
    if (symbol === "plus") {
        calc = "+";
        updateNumber();
        decimalPlace = 10;
        decimalMode = false;
    }
    else if (symbol === "minus") {
        if (firstNumber === 0) {
            firstNumber = -0;
            updateNumber();
        }
        else {
            calc = "-";
            updateNumber();
            decimalPlace = 10;
            decimalMode = false;
        }
    }
    else if (symbol === "times") {
        calc = "*";
        updateNumber();
        decimalPlace = 10;
        decimalMode = false;
    }
    else if (symbol === "divide") {
        calc = "/";
        updateNumber();
        decimalPlace = 10;
        decimalMode = false;
    }
    else if (symbol === "erase") {
        firstNumber = 0;
        calc = null;
        secondNumber = 0;
        decimalPlace = 10;
        decimalMode = false;
        document.getElementById("display").textContent = firstNumber;
    }
    else if (symbol === "equal") {
        if (calc === "+") {
            let temporaryValue = firstNumber + secondNumber;
            firstNumber = parseFloat(temporaryValue.toFixed(10)); //toFixed(10) up to 10 decimal places
            document.getElementById("display").textContent = firstNumber;
            secondNumber = 0;
            calc = null;
            decimalPlace = 10;
            let resultString = firstNumber.toString();
            if (resultString.includes('.')) {
                let decimalPart = resultString.split('.')[1];
                decimalPlace = 10 ** (decimalPart.length + 1); // Operator **: 10 to the power of what's is the ()
                resultString = undefined;
                decimalMode = true;
            }
            else {
                resultString = undefined;
                decimalMode = false;
            }
        }
        else if (calc === "-") {            
            let temporaryValue = firstNumber - secondNumber;
            firstNumber = parseFloat(temporaryValue.toFixed(10));
            document.getElementById("display").textContent = firstNumber;
            secondNumber = 0;
            calc = null;
            decimalPlace = 10;
            let resultString = firstNumber.toString();
            if (resultString.includes('.')) {
                let decimalPart = resultString.split('.')[1];
                decimalPlace = 10 ** (decimalPart.length + 1); // Operator **: 10 to the power of what's is the ()
                resultString = undefined;
                decimalMode = true;
            }
            else {
                resultString = undefined;
                decimalMode = false;
            }
        }
        else if (calc === "*") {
            let temporaryValue = firstNumber * secondNumber;
            firstNumber = parseFloat(temporaryValue.toFixed(10));
            document.getElementById("display").textContent = firstNumber;
            secondNumber = 0;
            calc = null;
            decimalPlace = 10;
            let resultString = firstNumber.toString();
            if (resultString.includes('.')) {
                let decimalPart = resultString.split('.')[1];
                decimalPlace = 10 ** (decimalPart.length + 1); // Operator **: 10 to the power of what's is the ()
                resultString = undefined;
                decimalMode = true;
            }
            else {
                resultString = undefined;
                decimalMode = false;
            }
        }
        else if (calc === "/") {
            let temporaryValue = firstNumber / secondNumber;
            firstNumber = parseFloat(temporaryValue.toFixed(10));
            document.getElementById("display").textContent = firstNumber;          
            secondNumber = 0;
            calc = null;
            decimalPlace = 10;
            let resultString = firstNumber.toString();
            if (resultString.includes('.')) {
                let decimalPart = resultString.split('.')[1];
                decimalPlace = 10 ** (decimalPart.length + 1); // Operator **: 10 to the power of what's is the ()
                resultString = undefined;
                decimalMode = true;
            }
            else {
                resultString = undefined;
                decimalMode = false;
            }
        }
    }
    else if (symbol === "comma") {
        decimalMode = true;
        updateNumber();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        insertNumber(Number(event.key));
    }
    else if (event.key === "+") {
        insertFunction("plus")
    }
    else if (event.key === "-") {
        insertFunction("minus")
    }
    else if (event.key === "*" || event.key === "x" || event.key === "X") {
        insertFunction("times")
    }
    else if (event.key === "/") {
        insertFunction("divide")
    }
    else if (event.key === "," || event.key === ".") {
        insertFunction("comma")
    }
    else if (event.key === "Backspace" || event.key === "Delete") {
        insertFunction("erase")
    }
    else if (event.key === "Enter" || event.key === "=") {
        insertFunction("equal")
    }
});