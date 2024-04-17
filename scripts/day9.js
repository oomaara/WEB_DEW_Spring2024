//by tdefault js runs from top to bottom, but we can change the order of execution by using functions

console.log("Satarting out our script"); //soncole log is built in function in JS that prints in console
//console is generally seen in browser's developer tool - console tab
//for debugging purposes - we should comment or delete console.log statement before deploying our code
//print current date and time
console.log(new Date());

let mydate = document.getElementById("creation-date");
mydate.style.backgroundColor = "red";


console.log("Ending our script");