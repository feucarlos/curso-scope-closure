var firstName;  // undefined
firstName = 'Carlos';
console.log(firstName);

var lastName = "Braulio"
lastName = 'Nancy'
console.log(lastName);

var secondName = 'Braulio';
var secondName = 'Nancy';
console.log(secondName);

// Let
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

let fruit = 'Banana'; // SyntaxError: Identifier 'fruit' has already been declared
console.log(fruit);

// const
const animal = 'dog'; // declarar y asignar
animal = 'cat';

console.log(animal);  // TypeError: Assignment to constant variable.

const vehicles = [];
vehicles.push('Kia');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);