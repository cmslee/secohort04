
var num1 = 100;
var num2 = 50;
var value;

value = num1 + num2;
value = num1 * num2;
value = num1 - num2;
value = num1 / num2;
value = value **2

console.log(value);

var value;

// remainder or modular here is useful to seeing if num is even (0) or odd (1)
value = 3 % 2;

console.log(value)

//note precedence of operators, which follows precedence in math. w/o parentehsis, division happens first (yielding 125 instead of 75 in this case).

value = (num1 + num2) / 2;

console.log(value);

// Math Object

value = Math.PI
value = Math.round(2.9)
value = Math.floor(2.9)
value = Math.ceil(2.3)
value = Math.max(9,2,33,55,244,5)
value = Math.min(9,2,33,55,244,5)

value = Math.random() //0-1, press refresh on browser to see multiple possible values
value = Math.random() * 10
value = Math.floor(Math.random() *10)

// random number from 0-10
value = Math.floor(Math.random() *10) + 1;

console.log(value);

//shortcut to operation + assignment (operational assignment) at same time:
value = 4;
// long syntax: value = value + 2;
value += 2; // <-- short syntax

// shortcut for operation w/1
value++
value++
value++
value--
value--
value--

console.log(value);
