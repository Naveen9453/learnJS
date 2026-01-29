# hoisting concept

1. Variable Hoisting with var

console.log(x); // undefined
var x = 10;
console.log(x); // 10

Explanation:
In JavaScript, var declarations are hoisted to the top of their scope but are initialized with undefined. When console.log(x) is called before the initialization, x is hoisted but not yet assigned the value 10, so it outputs undefined. After the initialization, x holds the value 10.

Concept:
Hoisting: Variable declarations are moved to the top of the scope, but the initialization happens in place.

2. Hoisting with Function Declaration

console.log(foo());

function foo() {
return "Hello!";
}

// output - Hello!

Explanation:
Function declarations are hoisted in their entirety, including the function body. So, even though foo() is called before the function definition, it works as expected because the function is fully hoisted to the top.

Concept:
Function Hoisting: Entire function declarations (including the body) are hoisted to the top of the scope.

3. Hoisting with let and const

console.log(a);
let a = 5;

// output- ReferenceError: Cannot access 'a' before initialization

Explanation:
Variables declared with let and const are hoisted but enter a "temporal dead zone" (TDZ) from the start of the block until they are initialized. This means that even though the declaration is hoisted, accessing a before its initialization will throw a ReferenceError.

Concept:
Temporal Dead Zone (TDZ): Variables declared with let and const are hoisted but cannot be accessed before initialization.

4. Hoisting with var inside a Function

function test() {
console.log(a);
var a = 10;
console.log(a);
}

test();

//output- undefined, 10

Explanation:
Within the function test(), the var declaration of a is hoisted to the top of the function. So, the first console.log(a) outputs undefined because the variable is hoisted but not yet initialized. After initialization, the second console.log(a) prints 10.

Concept:
Function Scope Hoisting: Inside a function, variables declared with var are hoisted to the top of the function, initialized as undefined.

5. Hoisting with Multiple var Declarations

console.log(a);
var a = 10;
var a = 20;
console.log(a);

//output- undefined, 20

Explanation:
JavaScript allows multiple var declarations in the same scope, but only the first declaration is hoisted. The initial console.log(a) logs undefined due to hoisting, and the last console.log(a) logs 20 because the second assignment overwrites the first one.

Concept:
Multiple Declarations with var: Multiple var declarations in the same scope are allowed but only the final assignment takes effect.

6. Hoisting with Function Expressions

   console.log(foo);
   var foo = function() {
   return "Hello!";
   };

console.log(foo());

//output- undefined, Hello!

Explanation:
In this case, foo is declared using a function expression. The variable foo is hoisted to the top and initialized with undefined. Therefore, the first console.log(foo) outputs undefined. Once the function is assigned to foo, the second console.log(foo()) successfully calls the function, outputting "Hello!".

Concept:
Function Expressions and Hoisting: Only the variable declaration is hoisted, not the function body. The function is assigned later in the code execution.

7. Hoisting with const Declaration
   console.log(b);
   const b = 30;

// output- ReferenceError: Cannot access 'b' before initialization

Explanation:
Like let, variables declared with const are hoisted but are in the temporal dead zone (TDZ) until initialized. Accessing b before it is initialized results in a ReferenceError.

Concept:
Hoisting and const: Variables declared with const are hoisted but are not accessible before initialization due to TDZ.

8. Hoisting with Function Declarations and Variable Declarations

function hoist() {
console.log(a);
var a = 10;
console.log(a);
}

var a = 20;
hoist();
console.log(a);

//output- undefined , 10, 20

Explanation:
Inside hoist(), a is hoisted as a local variable, so console.log(a) prints undefined first. After assignment, a becomes 10. Outside the function, the global a is unaffected and retains its value of 20.
Hoisting ensures that the local a in hoist() is treated separately from the global a.
Concept:
Local vs Global Scope: Variable hoisting applies within function scope and does not affect the global scope.

9. Hoisting with Arrow Functions
   console.log(foo);

var foo = () => {
return "Arrow Function!";
};

console.log(foo());

//output- undefined, Arrow Function!

Explanation:
Similar to function expressions, when using arrow functions, the variable foo is hoisted but remains undefined until it is initialized. So, the first console.log(foo) prints undefined, and the second console.log(foo()) works after foo is assigned the arrow function.

Concept:
Arrow Function Hoisting: Arrow functions behave like function expressions, where only the variable is hoisted, not the function body.

10. Hoisting with let and var in Loops

for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1000);
}

for (let j = 0; j < 3; j++) {
setTimeout(() => console.log(j), 1000);
}
// output-
3
3
3
0
1
2

Explanation:
For var i, the variable i is hoisted and shared across all iterations. By the time the setTimeout callback runs, the loop is done and i has the value 3.
For let j, let is block-scoped, so each iteration of the loop gets a new copy of j. Therefore, when the setTimeout callback runs, it prints the correct values (0, 1, 2).
Concept:
Loop Scoping with var vs let: Variables declared with var are hoisted and shared across loop iterations, while let creates a new binding for each iteration.
