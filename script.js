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
console.log(67);

function greet(greetings, names = []) {
    if (!Array.isArray(names)) {
        
    }

    return `${greetings} sa enyu ${names}`;
}

console.log(greet("Mayung aga", ["Mark", "Bai", "Soy", "Tol", "Erp"]));
