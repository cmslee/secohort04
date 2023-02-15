

console.log(5 > 2); //true
console.log(5 < 2); //false
console.log(10 === 10); //true
console.log(3 === 6); //false


console.log(55 >= 55);
console.log(33 <= 32);

// != is not Operator; it is negating
console.log(3 != 6); //true

console.log("RESULT -->", !true); //false


var result = 5 > 3
console.log(result); //true



// Can compare String values as well. This is based on unicode value
console.log('A' > 'a'); 
console.log('a' > 'A');

var user1 = "Alex";
var user2 = "alex";
console.log(user1 == user2); //false because of different unicode value for 'A' and 'a'


// Importance of no type-conversion equality (loose equality vs. strict equality)

var num1 = 5;
var num2 = '5';


console.log(num1 == num2) // because 'loose equality' will allow for type-conversion so that there is only comparison of VALUE
console.log(num1 === num2) // this is currently considered best practice to avoid default type-conversion; i.e. comparing both VALUE and TYPE
