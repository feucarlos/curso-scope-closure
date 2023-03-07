// Variables

var a;          // declarando
var b = 'b';    // declaramos y asignamos

b = 'bb';       // reasignación

var a = 'aa';   // redeclaración

// Global scope
var fruit = 'apple';  //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'México';
    console.log(country);
}

console.log(country);