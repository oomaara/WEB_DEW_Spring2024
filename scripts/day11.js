console.log("Let's do some looping!");

//while loop
let i = 0; //start value it should be variable because we will change it
while (i < 5) { //condition each loop iteration i is checked if it is less than 5  
    //only if the condition is true the code block below until } will be executed
    console.log("While loop iteration", i);
    //we could do more stuff here
    i++; //increment i by one //same as i+=1 or i=i+1
}
//after iteration
console.log("After while loop i is", i);

//we can loop backwards, just need to adjust the condition
let floor = 9; //our initial floor is 9
while (floor >= 0) { //pay close attention to the loop condition here it is >= meaning it will run while floor is greater than or equal to 0
    console.log("Floor", floor);
    floor--; //we keep decrementing the floor by 1
}
console.log("We are at the ground floor", floor);

//we can also adjust the step size
let j = 0;
while (j < 10) {
    console.log("While loop iteration", j);
    j += 2; //increment j by 2
}
console.log("After while loop j is", j);

//we can generalize while loop with start stop and step
const start = 200; //we use constant values for start stop and step to symbolize that they should not be changed
const stop = 250;
const step = 10;
let k = start; //we could have reused i or j or floor but we want to keep them for reference
//danger with reusing variables is that we might forget what they were used for and introduce bugs
while (k <= stop) { //at 250 we will still run the loop because we are using <= so k can be equal to stop
    console.log("While loop iteration", k);
    k += step; //so change k by step (it could have been negative but then our stop should be less than start)
}
//after iteration
console.log("After while loop k is", k);

//do while loops or what I call them "Shoot first ask questions later"

let m = 9000;
//lets get paragraph with id of "doWhileLoopOutput"
//and add same text as on console but with <br> tags
//so that it is displayed as a list
const doWhileLoopOutput = document.getElementById("doWhileLoopOutput");
do {
    console.log("Do while loop iteration", m);
    doWhileLoopOutput.innerHTML += `Do while loop iteration ${m}<br>`; //notice the += here
    //also notice ` backticks instead of ' or " this is called template string
    //if we use ` we can use ${variable} to insert variable value into the string
    //again innerHTML is a string so we can concatenate strings with += operator
    //above is avery much a quick and dirty way to add text to a paragraph
    //better way would be to use document.createElement and appendChild //which we will do in follow up lectures

    m++;
} while (m < 5); //notice the semicolon here
//do while loop will always run at least once because the condition is checked after the first iteration
console.log("After do while loop m is", m);

//if you did not know about do while loop you could do the same thing with while loop using break

let n = 9000;
while (true) { //infinite loop
    console.log("While loop iteration", n); //this will run at least once
    // doWhileLoopOutput.innerHTML += `While loop iteration ${n}<br>`;
    n++; //also will run at least once
    if (n >= 5) { //condition to break out of the loop
        console.log("I want to break free because n is", n);
        break; //break out of the loop and continue right after while loop
    }
    //you could add multiple break conditions
}
console.log("After break while loop n is", n);

//since it is kind of painful to remember to increment or decrement the loop variable
//for loops have been added to many programming languages they are more concise and less error prone

//Philosophically while loops should be used only when we do not know how many iterations we need
//for example we might get some user input or we might be reading from a file or a network and something might change
//for loops should be used when we know how many iterations we need

//for loop syntax
//for (start; stop; step) { code block }
//start is executed only once at the beginning
//stop is checked before each iteration
//step is executed after each iteration

//for loop is a combination of while loop and incrementing the loop variable

for (let i = 100; i < 103; i++) { //we can declare i in the for loop itself
    console.log("For loop iteration", i);
}
//after iteration the loop i is not available!! 
//older versions of JavaScript would have made it available
//in other words i went out of scope - the scope of loop variable is only inside the loop
//this is a GOOD thing because we do not want to accidentally use the loop variable outside of the loop

console.log("After for loop i is", i); //this will show the OTHER i not the one from for loop
//if we did not have other i it would be an error

//lets use i again but now we will count down by 2
for (let i = 10; i >= 0; i -= 2) {
    console.log("For loop iteration", i);
    //so here i -= 2 is performed after each iteration
}
//again i is not available here UNLESS we have it declared outside of the loop
console.log("After for loop i is", i); //still 5 from the while loop


//switches are another way to do branching - they can make the code more readable
const day = new Date().getDay(); //use let if you would change the value later
const switchOutput = document.getElementById("switchOutput");
switch (day) {
    case 0: //in Javascript, Sunday is 0
        console.log("Sunday");
        switchOutput.innerText = "Sunday";
        break; //typically we want to break out of the switch after each case
        //it is possible to fall through to the next case but that is not recommended
    case 1:
        console.log("Monday");
        switchOutput.innerText = "Monday";
        break;
    case 2:
        console.log("Tuesday");
        switchOutput.innerText = "Tuesday";
        break;
    case 3:
        console.log("Wednesday");
        switchOutput.innerText = "Wednesday";
        break;
    case 4:
        console.log("Thursday");
        switchOutput.innerText = "Thursday";
        break;
    case 5:
        console.log("Thankfully it is Friday! 🥳 ");
        switchOutput.innerText = "Thankfully it is Friday! 🥳 ";
        break;
    case 6:
        console.log("Saturday");
        switchOutput.innerText = "Saturday";
        break;
    default: //should never happen - alien invasion or something
        console.log("Unknown day");
        switchOutput.innerText = "Unknown day - ALIENS! 🛸";
}

//I should note that in case of numeric values we could have used an array and index into it
//that would be more efficient and less error prone
//we will cover arrays and objects next lecture