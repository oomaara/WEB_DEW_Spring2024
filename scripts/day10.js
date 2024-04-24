console.log("Day 10 - Conditionals")

const el = document.getElementById("output"); // here using DOM API to get the element

el.style.borderWidth = "3px"; // here accessing style properly of the element and changing it
//normaly statically changing something through JS is not much of a pint since scc could have don on self

// el.textContent = 5 > 3; // gere accessing textContent of the element, and changing it 4 === 4 is better, 4 == 4 needs to be avoided

//you shoud change textContent using textContent
//innerHTML is used to change HTML content of the element, very powerful , but dangerous
// el.innerHTML = "<h2> Do not do this generally</h2><p> 5 > 3: " + (5 > 3) + "</p><br>"; // this is not recemmended because it is not safe as soon as u get some user inputs

let element = document.getElementById("comparison1")
element.textContent = 5 > 3; // so > is done first and the the result is assigned to textContent
element = document.getElementById("comparison2")//resusing the same variable, cann also lead to bugs
element.textContent = 5 < 3;
element = document.getElementById("comparison3")
element.textContent = 5 == 3;
element = document.getElementById("comparison4")
element.textContent = 5 != 3;
element = document.getElementById("comparison5")
element.textContent = 5 === 3;// so === is strict equallity operator, it checks for both value and type
element = document.getElementById("comparison17")
element.textContent = "22" == 22; // so == is loose equallity operator, it only checks for value NOT type, best avoided
element = document.getElementById("comparison18")
element.textContent = "22" === 22; // so === is strict equallity operator, it checks for both type and value
//use === and !== always, == and != are not recommended