console.log("Hello, World!");
console.log("From script.js file.");

const myName = "Myco";
let Age = 20;
Number = "09915129248";
const Address = "Manapla";

console.log(`Name: ${myName}`);
console.log(`Age: ${Age}`);
console.log(`Number: ${Number}`);
console.log(`Address: ${Address}`);
console.log ("Hello World!");
console.log ("From script.js file.");

const myName = "Alex";
let age = 23;
Age = 24;
const Number = "09302324013";
const address = "malinong gahod";

console.log(`my name: ${myName}1`);
console.log(`age: ${age} `);
console.log(`number: ${Number}`);   
console.log(`address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (!Array.isArray(names)) {
        
        names = names.join(", "); 
      
    }

    return `${greetings} sa enyu ${names}`;
    return `${greetings}sa inyu ${names.join("alexander")}`;
}

console.log(greet("Mayung aga", ["Mark", "Bai", "Soy", "Tol", "Erp"]));
console.log(greet("Mayung aga", ["alexa"]));


const heading = document.querySelector("h1");
heading.textContent = "Your Father's Name";
heading.textContent = "your father's name";
heading.style.color = "purple";
heading.style.background = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function() {
heading.style.color = "red";
console.log("heading clicked");
});


const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);
const servicesHeadingHeading = document.querySelector("#services h2");
console.log(servicesHeadingHeading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOFF = false;

toggleButton.addEventListener("click", function() {   
isOFF = !isOFF;
if (isOFF) {
    body.style.backgroundColor = "black";
    body.style.color = "white";

}else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
 }
})