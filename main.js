//DECLARATIONS:
let equation = "",
    operators = "÷x-=+";

//FUNCTIONS:
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

//button clicking functions.
const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
    btn.addEventListener("click",function calc(){
        let clickedBtn = btn.innerHTML,
            answers = document.querySelector("#answers"),
            classes = btn.classList;
        //control classes.
        if (classes.contains("control")) {
            //clear screen.
            if (clickedBtn == "clear") {
                answers.innerHTML = "";
                equation = "";
            //delete last character on screen.
            } else if (clickedBtn == "delete") {
                equation = equation.substring(0, equation.length - 1);
                answers.innerHTML = equation;
            } else {
                console.log(clickedBtn);
            }
        //number classes.
        } else if (classes.contains("number")) {
            //if equation is empty, 
            if (equation == "") {
                equation = clickedBtn;
                answers.innerHTML = clickedBtn;
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
                }
        //operator classes.
        } else if (classes.contains("operator")) {
            if (equation == "") {
                //add no operator
            //if operator is last character in equation, replace operator with new button clicked.
            } else if (lastCharIsOperator(equation) == true) {
                equation = equation.substring(0, equation.length - 1);
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            //if operator is NOT at last of equation, solve current equation, place solution in screen, then add clicked operator after solution.
            } else if (containsOperator(equation)[0] == true
                && lastCharIsOperator(equation) == false) {
                console.log("operator present, solve equation");
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            }
        }
    });
}