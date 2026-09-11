console.log("Hello world.");
console.log("From script.js file.");

const myName = "Myco";
let age = 20;
const number = "090946300889";
const address = "MANAPLA";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greetings} sa enyu ${names}`;
}

console.log(greet("Mayung aga", ["Mark", "papalada", "yambot", "mamalada", "moew"]));

const heading = document.querySelector("h1");
if (heading) {
    heading.textContent = "RAMOS.";
    heading.style.color = "purple";
    heading.style.backgroundColor = "yellow";
    heading.style.fontSize = "100px";
    console.log(heading.textContent);

    heading.addEventListener("click", function () {
        heading.style.color = "red";
        console.log("Heading was clicked");
    });
}

const contactHeading = document.querySelector("#contact h2");
if (contactHeading) {
    console.log(contactHeading);
}

const projectsHeadingHeading = document.querySelector("#services h2");
if (projectsHeadingHeading) {
    console.log(projectsHeadingHeading);
}

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOFF = false;

if (toggleButton && body) {
    toggleButton.addEventListener("click", function () {
        isOFF = !isOFF;

        if (isOFF) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    });
}