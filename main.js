//DECLARATIONS:
let equation = "",
    operators = "÷x-+";

//FUNCTIONS:
//function that checks if a string contains a decimal.
function containsDecimal(str) {
    if (str.indexOf(".") > -1) {
        return true;
    }
}

//function that checks if a string contains any of the calculator's operators.
function containsOperator(str) {
    let values = [undefined, undefined];
    for (i = 0; i <= operators.length; i++) {
        if (str.indexOf(operators[i]) > -1) {
            values = [true, operators[i]];
        }
    }
    return values;
}

//function that checks if last character in a string contains any of the calculator's operators.
function lastCharIsOperator(str) {
    let lastChar = str.slice(-1);
        operatorStatus = containsOperator(lastChar);
    if (operatorStatus[0] == true) {
        return true;
    } else {
        return false;
    }
}

//function that splits equation into an array as follows: [(first number entered), (second number entered), (operator)]
function equationSplitter(str) {
    let operator = containsOperator(str)[1],
        numbers = str.split(operator);
    numbers.push(operator);
    return numbers;
}

//function that solves equation using operator discovered by containsOperator.
function solveEquation(str) {
    let numbers = equationSplitter(str),
        numberOne = parseFloat(numbers[0]),
        numberTwo = parseFloat(numbers[1]),
        operator = numbers[2],
        result;
    if (operator == "÷") {
        result = numberOne / numberTwo
    } else if (operator == "x") {
        result = numberOne * numberTwo
    } else if (operator == "-") {
        result = numberOne - numberTwo
    } else if (operator == "+") {
        result = numberOne + numberTwo
    }
    return result.toString();
}

function controlClass() {
    
}

//button clicking functions.
const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
    btn.addEventListener("click",function calc(){
        let clickedBtn = btn.innerHTML,
            answers = document.querySelector("#answers"),
            classes = btn.classList;
        //control classes.
        if (classes.contains("control")) {
            //clear button: clear screen.
            if (clickedBtn == "clear") {
                answers.innerHTML = "";
                equation = "";
            //delete button: deletes last character on screen.
            } else if (clickedBtn == "delete") {
                equation = equation.substring(0, equation.length - 1);
                answers.innerHTML = equation;
            //equals button: solves equation.
            } else {
                equation = (solveEquation(equation));
                answers.innerHTML = equation;
            }
        //number classes.
        } else if (classes.contains("number")) {
            //decimal button: adds decimal if decimal is not already present in equation.
            if (clickedBtn == ".") {
                if (containsDecimal(equation) == true) {
                    //do nothing.
                } else {
                    equation = equation + clickedBtn;
                    answers.innerHTML = equation;
                }
            //number buttons: add numbers onto equation.
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            }
        //operator classes.
        } else if (classes.contains("operator")) {
            //if equation is empty, do not add operator.
            if (equation == "") {
                //do nothing
            //if operator is last character in equation, replace operator with new button clicked.
            } else if (lastCharIsOperator(equation) == true) {
                equation = equation.substring(0, equation.length - 1);
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            //if operator is NOT the last of equation, solve current equation, place solution in screen, then add clicked operator after solution.
            } else if (containsOperator(equation)[0] == true
            && lastCharIsOperator(equation) == false) {
                equation = (solveEquation(equation));
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            }
        }
    });
}