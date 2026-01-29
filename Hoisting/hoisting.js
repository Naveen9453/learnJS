// 1. Variable Hoisting with var

console.log(x); // undefined
var x = 10;
console.log(x); // 10

// 2. Hoisting with Function Declaration

console.log(foo());

function foo() {
  return "Hello!";
}

// output - Hello!

// 3. Hoisting with let and const

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

// 4. Hoisting with var inside a Function

function test() {
  console.log(a);
  var a = 10;
  console.log(a);
}

test();

//output- undefined, 10

// 5. Hoisting with Multiple var Declarations

console.log(b);
var b = 10;
var b = 20;
console.log(b);

//output- undefined, 20

//6. Hoisting with Function Expressions

console.log(foo);
var foo = function () {
  return "Hello!";
};

console.log(foo());

//output- undefined, Hello!

// 7. Hoisting with const Declaration
console.log(b);
const b = 30;

// output- ReferenceError: Cannot access 'b' before initialization

// 8. Hoisting with Function Declarations and Variable Declarations

function hoist() {
  console.log(x);
  var x = 10;
  console.log(x);
}

var x = 20;
hoist();
console.log(x);

//output- undefined , 10, 20

//9. Hoisting with Arrow Functions

console.log(foo);

var foo = () => {
  return "Arrow Function!";
};

console.log(foo());

//output- undefined, Arrow Function!

// 10. Hoisting with let and var in Loops

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}
// output- 3 3 3 0 1 2
