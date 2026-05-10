let firstNumber = 0;
let calc = null;
let secondNumber = 0;
let calcs = ["add", "div", "min", "tim"];
let displayedNumber = "";

function updateNumber() {
    if (calc === null) {
        displayedNumber = firstNumber
    }
    else if (calc === "add" && secondNumber === 0) {
        displayedNumber = firstNumber + " + "
    }
    else if (calc === "min" && secondNumber === 0) {
        displayedNumber = firstNumber + " - "
    }
    else if (calc === "tim" && secondNumber === 0) {
        displayedNumber = firstNumber + " * "
    }
    else if (calc === "div" && secondNumber === 0) {
        displayedNumber = firstNumber + " / "
    }
    else if (calc === "add") {
        displayedNumber = firstNumber + " + " + secondNumber
    }
    else if (calc === "min") {
        displayedNumber = firstNumber + " - " + secondNumber
    }
    else if (calc === "tim") {
        displayedNumber = firstNumber + " * " + secondNumber
    }
    else if (calc === "div") {
        displayedNumber = firstNumber + " / " + secondNumber
    }
    document.getElementById("display").textContent = displayedNumber;
}

function insertNumber(number) {
    if (calc === null && firstNumber === 0) {
        firstNumber = number;
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


function displayC() {
    firstNumber = 0;
    calc = null;
    secondNumber = 0;
    document.getElementById("display").textContent = firstNumber;
}

function displayAdd() {
    calc = "add";
    updateNumber();
}

function displayMin() {
    calc = "min";
    updateNumber();
}

function displayTim() {
    calc = "tim";
    updateNumber();
}

function displayDiv() {
    calc = "div";
    updateNumber();
}

function displayEq() {
    if (calc === "add") {
        document.getElementById("display").textContent = firstNumber + secondNumber;
        firstNumber = firstNumber + secondNumber;
        secondNumber = 0;
        calc = null;
    }
    else if (calc === "min") {
        document.getElementById("display").textContent = firstNumber - secondNumber;
        firstNumber = firstNumber - secondNumber;
        secondNumber = 0;
        calc = null;

    }
    else if (calc === "tim") {
        document.getElementById("display").textContent = firstNumber * secondNumber;
        firstNumber = firstNumber * secondNumber;
        secondNumber = 0;
        calc = null;
        }
    else if (calc === "div") {
        document.getElementById("display").textContent = firstNumber / secondNumber;
        firstNumber = firstNumber / secondNumber;
        secondNumber = 0;
        calc = null;
    }
}