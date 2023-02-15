
//Ask user for input with a function like:
var userName = prompt("hello. this is meh bot. what's your name?");

var userMood = prompt("how are you feeling, " + userName + "?");

alert(userMood + " is " + userMood + ". " + "such is life.");

var favNum = prompt("what is your favorite number, " + userName + "?")

Number(favNum)
console.log(typeof favNum)

//alert the user using concatenation
alert("okay, " + userName. favNum + " is an okay favorite number.")

// alert the user using Template String
// \n  creates a line break
alert(`okay, ${userName}. ${favNum} is an okay favorite number.\njust like 0 or 23 or -59.`);