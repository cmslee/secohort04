//* Global Scope

const favColor = "blue";


if (favColor === "red") {
    //* Local Scope
    //if true, run this code:
    // alert ("Nice. I love red, too!");

} else {
    //if false, run this code:
    // alert("Sorry. I am not familiar with " + favColor + ".")
}


console.log(favColor);


//: || operator (either side true for condition to be met)
//: && operator (both sides must be true for condition to be met)

const score = 100;
const userLoggedIn = true; // this constant won't get a chance to execute in this case because the order of if conditions will dictate that as soon as a condition is meant, the if statement ends

if  (score >= 60 && score <= 99) {
    // alert("You win!")

} else if (score >= 50 || score <=59) {
    // alert("Try again!")

} else if (score === 100 && userLoggedIn === true) {
    // alert("Congrats! You have the new high score!")

} else {
    // alert("You lose!")
}


const num = 0;

if (num < 0) {
    // alert("negative number")

} else if (num > 0) {
    // alert("positive number")

} else {
    // alert("neither positive nor negative")
}

// Exercise if

const userAge = 18;

if (userAge >= 18) {
    // alert("Click to enter site.")

} else {
    // alert("Access denied.")
}


// Nested if/else

// Exe.1
const age = 16;
const userName = "Alex";

if (age >= 18) {
    // alert("Age confirmed.")

    if(userName === "Alex"){
        // alert(`Welcome, ${userName}.`)
    }

} else {
    // alert("Access denied.")
}

// Exercise numNew

const numNew = 28

if (numNew > 0) {
    // alert(`${numNew} is positive`)

    if (numNew > 100) {
        // alert(`positive number ${numNew} is greater than 100`)
    
    } else if (numNew < 100) {
        // alert(`positive number ${numNew} is less than 100`)
    }     

} else {
    // alert("outside of criteria")
} 


// Exercise letter grade !! still confused

const userGrade = 85

if (userGrade >= 90) {
        console.log("A"); 
    }

if (userGrade >= 80){
        console.log("B")
    } 

if (userGrade >= 70){
        console.log("C")
    }
if (userGrade >= 55) {
        console.log("D")
    } 
else {
        console.log("F")
    }
    
    
    // * Switch statements
    
    const color = "red";
    
    switch (color){
        case "red":
            console.log("Color is red.");
            break;
    
        case "yellow":
            console.log("Color is yellow.");
            break;
        
        case "purple":
            console.log("Color is purple.");
            break;
        
        default:
            console.log("Please pick a color.");
    }