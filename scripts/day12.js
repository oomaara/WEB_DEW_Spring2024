//let's explore Javascript functions
//functions are a way to group code together

//let's make a simple greeting that prints something fixed to console
function greet() {
    //so we have a way of grouping code together
    console.log("Hello there!");
    console.log("I hope you are having a great day!");
    //we can add as much code as we want here
    //still functions should be kept small and do one thing and do it well - this is a good practice
    //generally if your function is over one page long you should consider breaking it up
}

//in order to use a function I need to call it
greet();
// //I could call this function as many times as I want
// for (let i = 0; i < 5; i++) {
//     greet();
// }

//let's make a function that takes name as parameter and outputs a greeting
function greetWithName(name) {
    console.log("Hello " + name + "!");
    console.log("I hope you are having a great day!");
}

//I can call this function with a parameter
// greetWithName(); //well you did not give me a name so Javascript assigns undefined to name
//in many languages this would be an error but in Javascript it is not
greetWithName("Māra");
greetWithName("Minna");

//let's make a function that outputs a greeting into textContent of an element that is passed as a parameter
function greetToElement(name, element) {
    // element.textContent = "Hello " + name + "!";
    //I like backticks for string interpolation same as above but more readable
    element.textContent = `Hello ${name}!`;
    //i could add console.log here to see what is happening remove it for production
    console.log("Hello " + name + "!");
}

//I can call this function with a parameter
// const myOutputElement = document.getElementById("output-fun-id"); //typical juxtaposition of id naming error
const myOutputElement = document.getElementById("fun-output-id");

greetToElement("Māra", myOutputElement);

//i could call this function with different parameters
//I can get element on the fly by calling document.getElementById("fun-output-id")
//I do not save the element in a variable but just pass it directly to function
greetToElement("Minna", document.getElementById("fun-output-id-2"));

//functions can also return values
//let's make a function that takes a name and returns a greeting string
function greetString(name) {
    //so this is more pure function that only returns a value
    //it does not have any side effects - meaning it does not change anything outside of itself
    return `Hello ${name}!`; //so string interpolation is very handy
}

//now let's make a function that takes a greeting and element and assigns the greeting to the element
//this is more flexible because the greeting can be anything
//lets add a padding to the element textContent with default value of "" if no padding is given
//default value means if we do not pass anything to padding it will use the default value
function greetStringToElement(greeting, element, padding = "") {
    element.textContent += (padding + greeting); //appending NOT replacing the text
    //above is same as element.textContent = element.textContent + greeting;
    console.log(greeting);
}

//I can call greetString and pass the result to greetStringToElement
const myGreeting = greetString("Spring");
greetStringToElement(myGreeting, myOutputElement);

//we could have a mathematically inclined function which takes two numbers and returns their sum
function sum(a, b) {
    //we could do some extra checks here to make sure a and b are numbers
    //as it is this function will work also with strings because Javascript is very flexible
    //that is Javascript will not check if a and b are numbers
    return a + b;
}
const myCustomGreeting=`Adding 5 and 7 should be ${sum(5, 7)}`;
//now we have a LOT of flexibility we can add whatever padding we need
greetStringToElement(myCustomGreeting, myOutputElement, padding=" 👨‍💻 ");

//now we can create a loop that calculates sums from 1 to 20
for (let i = 1; i <= 20; i++) {
    greetStringToElement(`Sum of ${i} and ${i} is ${sum(i, i)}`, myOutputElement, padding=" 🚀 ");
}

//let's add an event listener that listens to click on a button and then calls a function
//the function will increase the counter and display it
//we will need a counter variable
let counter = 0; //it could have gone up top and started at any number
//we will need a reference to the button
const myIncreaseBtn = document.getElementById("btn-click-increase");

//we will need a reference to the element where we will display the counter
const myCounterElement = document.getElementById("counter-output-id");

//we will need a function that will increase the counter and display it
function increaseCounter() {
    counter++;
    myCounterElement.textContent = `Counter is at ${counter}`;
    console.log(`Counter is at ${counter}`); //for debugging
}

//now we will add an event listener to the button
//we can add event listeners to any element that can have events divs, spans, buttons, inputs etc even body
//we can listen to many events like click, mouseover, mouseout, keydown, keyup etc
//notice we pass increaseCounter without () because we do not want to call it here - we just pass the reference
//let's log that we have created an event listener
console.log("Adding event listener to button");
myIncreaseBtn.addEventListener("click", increaseCounter);

//let's find our reset button
const myResetBtn = document.getElementById("btn-click-reset");

//let's create a reset function
function resetCounter() {
    counter = 0;
    myCounterElement.textContent = `Counter is at ${counter}`;
    console.log(`Counter is at ${counter}`); //for debugging
}

//let's add an event listener to the reset button
//let's listen for mouse up event - means when the mouse is released not clicked
console.log("Adding event listener to reset button - this time mouse up event");
myResetBtn.addEventListener("mouseup", resetCounter);


//let's add an event listener to the body element that adds random color background on click
const myBodyElement = document.body;
function randomColorBackground() {
    //we will generate random color
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    myBodyElement.style.backgroundColor = randomColor;
    console.log(`Setting background color to ${randomColor}`);
}

//let's add an event listener to the body element
console.log("Adding event listener to body element");
myBodyElement.addEventListener("click", randomColorBackground);