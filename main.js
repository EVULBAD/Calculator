/*
const add = function() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
};
 
const subtract = function() {
    let difference = Math.abs(arguments[0] - arguments[1]);
    return difference;
};
  
const multiply = function() {
    let product = 1,
      args = arguments[0];
    for (i = 0; i < args.length; i++) {
      product *= parseInt(args[i]);
    }
    return product;
};

const divide = function() {

}
*/

//declarations.
let equation = "",
    operators = "÷x-=+";

//function that checks if the last character in a string contains any of the calculator's operators.
function containsOperator(str) {
    for (i = 0; i <= operators.length; i++) {
        if (str.indexOf(operators[i]) > -1) {
            return true;
        }
    }
}

//button clicking functions.
const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
    btn.addEventListener("click",function calc(){
        let clickedBtn = btn.innerHTML,
            answers = document.querySelector("#answers"),
            classes = btn.classList;
        if (classes.contains("control")) {
            if (clickedBtn == "clear") {
                answers.innerHTML = "";
                equation = "";
            } else if (clickedBtn == "delete") {
                equation = equation.substring(0, equation.length - 1);
                answers.innerHTML = equation;
            } else {
                console.log(clickedBtn);
            }
        } else if (classes.contains("number")) {
            if (equation == "") {
                equation = clickedBtn;
                answers.innerHTML = clickedBtn;
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
                }
        } else if (classes.contains("operator")) {
            if (equation == "") {
                //add no operator
            //if operator is in back of equation, replace operator with new button clicked.
            } else if (containsOperator(equation) == true) {
                equation = equation.substring(0, equation.length - 1);
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            //if operator is anywhere else in equation, solve current equation, place answer in screen, then place new operator.
            /*} else if (containsOperator(equation) != (equation.length - 1) && containsOperator(equation) > (equation.length - 1)) {
                console.log("operator present");
                */
            } else {
                equation = equation + clickedBtn;
                answers.innerHTML = equation;
            }
        }
    });
}