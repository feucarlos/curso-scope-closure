'use strict';
pi = 3.1415926535; // ReferenceError: pi is not defined
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.141592;  // ReferenceError: pi is not defined
};

console.log(myFunction());