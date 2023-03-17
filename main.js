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

document.querySelector("#answers").innerHTML = "&nbsp";

const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
    btn.addEventListener("click",function calc(){
        let equation = btn.innerHTML;
        //if (equation == "")
        document.querySelector("#answers").innerHTML = equation;
    });
}