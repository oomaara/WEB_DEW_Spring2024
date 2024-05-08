console.log("Let's do some looping!");

//while loop
let i = 0; //start value it should be variable because we will change it
while (i < 5){ //condition each loop iteration i is checked if it is less than 5
    //only if the condition is true the code block below until } will be executed
    console.log("While loop iteration", i);
    //we could do more stuff here
    i++; // increment i by one// same as i+=1 or i=i+1
}
//after iteration
console.log("After while loop i is", i);

//we can loop backwards, just need to adjust the condition
let floor = 9; //our initial floor is 9
while (floor >= 0){ //pay close attention to the loop condition here it is >= meaning it will run while floor ir greater or equal to 0
    console.log("Floor", floor);
    floor--;//we ceep decrementing the floor by 1
}
console.log("We are at the ground floor", floor);

//we can also adjust the step size
let j = 0;
while (j < 10) {
    console.log("while loop iteration", j);
    j += 2; //increment j by 2
}
console.log("After while loop j is", j);

//we can generalize while loop with start stop and step
const start = 200; // we use constant values for start stop and step to symbolize that they should not be changed 
const stop = 250;
const step = 10;
let k = start; // we could have reused i or j or floor but we want to keep them for reference
//danger with reusing variables is that we might forget what they were used for and introduce bugs
while (k <= stop){ //at 250 we will still run the loop because we are using <= so k can be equal to stop
    console.log("While loop iteration", k);
    k += step;//so change k by step (it could have been negative but then our stop should be less than start)
}
//after iteration
console.log("After while loop k is", k);

//since it is kind of painful to remember to increment or decrement the loop variable
//for loops have been added to many programming languages they are more concise and less error prone

//Philosophically while loops should be used only when we do not know how many iterations we need
//for example we might get some user input or we might be reading from a file or a network and something might change
//for loops should be used when we know how many iterations we need

//do while loops or what I call "Shoot first ask question later"
let m = 0;
//let's get paragraph with id of "doWhileLoopOutput"
//and add same text as on console but with <br> tags
//so that it is displayed as a list
const doWhileLoopOutput = document.getElementById ("doWhileLoopOutput");
do{
    console.log("Do while loop iteration", m);
    doWhileLoopOutput.innerHTML += 'Do while loop iteration ${m}<br>'; 



    m++;
} while (m < 5);//notice the semicolon here
//do while loop will always run at least once because the condition is checked after the first iteration
console.log ("After do while loop m is", m)

//if you did not know about do while loop 
