//by tdefault js runs from top to bottom, but we can change the order of execution by using functions

console.log("Satarting out our script"); //soncole log is built in function in JS that prints in console
//console is generally seen in browser's developer tool - console tab
//for debugging purposes - we should comment or delete console.log statement before deploying our code
//print current date and time
console.log(new Date());


//TODO talk about let and const
//let is used to declare variables that can be reassigned
//constt is used to declare variables that cannot be reassigned
//old var is still there but let and const are preferred
//var is best avoided because it has some quirks

//good practice is to start defining variables at the top of the script
//also use const whenever possible then change to let if needed
//tihis is for bug prevention

//so = is assignment operator
const creatorElement = document.getElementById("creator");
//for longer variable names i am using camelCase longVariableName etc
//some languages like Python use snake_case long_variable_name etc
//just be consistent
//also use meaningful names for variables
//for example x and y are good for coordinates but not for other things

//let's change the background color of the creatorElement
creatorElement.style.backgroundColor = "yellow"; // again this could have been done with CSS
//let's add creator's name to the creatorElement
const firstName = "Māra"; //imagine you get this name from some other source
const lastName = "Kudrjavceva";
//let's concatenate first and last name
const fullName = firstName + " " + lastName;

creatorElement.textContent="Created by " + fullName; // basic string concatenation

//instead of concatenation we could use template strings
//creatorElement.textContent = "Created by " + fullName
creatorElement.textContent = 'Created by ${fullName}';
//notice the backticks these are used for template strings
//useful when you have more complex strings to build


const myDate = document.getElementById("creation-date");
myDate.style.backgroundColor = "aqua";

//let's update mydate textContent to current date and time
myDate.textContent = new Date();

//let's do some math
//first let's extract year fron current date
const currentYear = new Date().getFullYear();
console.log("Current year is", currentYear);
//let's do some math what year will it be in 100 years
const futureYear = currentYear + 100;
console.log("Year in 100 years will be", futureYear);

//JS is tricky with numbers - be careful
console.log("22"+1); //this will give you 221
console.log(parseInt("22")+1); //this will give you 23
//parseInt is a built in functon that converts strings to integers
console.log(22+1);//this will give you 23

//determining data types
//JS is dynamically typed language so you don't have to specify data types
//but it is good to know what data types you are working with
//you can use typeof operator to determine data type
console.log("Data type of currentYear is", typeof currentYear);
console.log("Data type of fullName is", typeof fullName);

console.log("Ending our script");