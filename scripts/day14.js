console.log("Let's add and remove some elements upon user interaction!");

//first we will create functions that add and remove elements
//first function will add an element given a container and also the tag name, also classes, id, and text content
//finally we will have an optional bgColor parameter to change background color directly

function addElement(container, tagName, classes, id, textContent="", bgColor=null) {
    console.log(`Calling addElement with tag name ${tagName} and text content ${textContent}`);
    //we will create a new element
    const newElement = document.createElement(tagName); //so tagName should be found in MDN HTML element reference
    //we will set the classes
    newElement.classList.add(...classes);
    //we will set the id
    newElement.id = id;
    //we will set the text content
    newElement.textContent = textContent; //we could have made a paragraph element and set its text content
    //we will set the background color if it is provided
    if (bgColor) {
        newElement.style.backgroundColor = bgColor;
    }
    //we will append the new element to the container
    container.appendChild(newElement);
}

//let's create a function that removes an element given its id
function removeElement(container, id) {
    console.log(`Calling removeElement with id ${id}`);
    //we will get the element by its id
    const elementToRemove = document.getElementById(id);
    //we will remove the element from the container
    container.removeChild(elementToRemove);
}

function addEvenOddElement() {
    elementCounter++; //we need to adjust this global counter
    const customClass = elementCounter % 2 === 0 ? "even" : "odd";
    if (customClass === "even") {
        console.log(`Even element, adding background color ${colorPicker.value}`);
        addElement(container, "div", ["boxy", customClass], `element-${elementCounter}`, "This is the element No. " + elementCounter, colorPicker.value);
    } else { //so odd elements will not have background color
        addElement(container, "div", ["boxy", customClass], `element-${elementCounter}`, "This is the element No. " + elementCounter);
    }
}

//let's get our container where we will be adding elements
//its id is element-container-1
const container = document.querySelector("#element-container-1"); //alternatively we could use getElementById("element-container-1")
//more on querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//querySelector works similar to CSS selectors, so it will return the first element that matches the selector
// # stands for id, . stands for class, and nothing stands for tag name

//let's add an element to the container
// addElement(container, "div", ["boxy", "cool"], "element-1", "This is the first element");

//let's get the button that will add elements
const addButton = document.querySelector("#add-element-button"); //again you need hash if you are selecting by id

//lets get even color picker element
const colorPicker = document.querySelector("#even-color-picker");

//let's use a global counter to keep track of the number of elements
let elementCounter = 0; //this is globally accessible again strive to minimize global variables

//let's add an event listener to the button
addButton.addEventListener("click", function() {
    addEvenOddElement();
});

//lets get button for add-multiple elements
const addMultipleButton = document.querySelector("#add-multiple-elements-button");
//also let's get input element that holds add-count
const addCountInput = document.querySelector("#add-count");

//now let's add listener to the add-multiple button
addMultipleButton.addEventListener("click", function() {
    //we will get the value of the input element
    const addCount = parseInt(addCountInput.value); //we need to convert it to integer
    //we will add addCount number of elements to the container
    for (let i = 0; i < addCount; i++) {
        addEvenOddElement();
    }
});


//lets get our remove button
const removeButton = document.querySelector("#remove-element-button");

//now let's add listener to the remove button
removeButton.addEventListener("click", function() {
    //good idea to add some safety checks
    if (elementCounter === 0) {
        console.log("No elements to remove!");
        return;
    }
    //we will remove the last element from the container
    removeElement(container, `element-${elementCounter}`); //note how we create the id from the counter
    elementCounter--;
});

//lets get our removeAll button
const removeAllButton = document.querySelector("#remove-all-elements-button");

//now let's add listener to the remove button
removeAllButton.addEventListener("click", function() {
    //good idea to add some safety checks
    // if (elementCounter === 0) {
    //     console.log("No elements to remove!");
    //     return;
    // }
    // //we will remove all elements from the container
    // while (elementCounter > 0) {
    //     removeElement(container, `element-${elementCounter}`); //note how we create the id from the counter
    //     elementCounter--;
    // }
    //above approach worked but we had to follow a counter
    //below approach is generic and will remove all elements of whatever element container
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    elementCounter = 0; //since we use it for followup we should reset it
});


//TODO refactor code to have all listeners in a separate function
//TODO add a main function that will call all the functions
//TODO add custom text input for elements