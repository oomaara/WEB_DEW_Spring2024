console.log("Let's do some looping!");

//while loop
let i = 0; //start value
while (i < 5){ //condition
    console.log("While loop iteration", i);
    i++; // increment i by one// same as i+=1 or i=i+1
}
//after iteration
concole.log("After while loop i is", i);

//we can loop backwards, just need to adjust the condition
let floor = 9; //our initial floor is 9
while (floor >= 0){ //pay close attention to the loop condition here it is >= meaning it will run while floor
    concole.log("Floor", floor);
    floor--;//we ceep decfrementing the floor by 1
}
console.log("We are at the ground floor", floor)

//we can also adjust the step size
let j = 0;
while (j < 10) {
    console.log("while loop iteration", j);
    j += 2; //increment j by 2
}
console.log("After while loop j is", j)

//we can generalize while loop with start stop and step
const start = 200;
const stop = 250;
const step = 10;
let k = start;
while (k < stop){
    console.log("While loop iteration", k);
    k += step;
}
//after iteration
console.log("After while loop k is", k);

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
