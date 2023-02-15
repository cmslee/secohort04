
// *Example


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

console.log("CLASS EXERCISES")

// Exercise: loop counts down from 10 to 1

console.log("----count backwards from 10 to 1----")

for(let i = 10; i >= 0 && i <= 10; i--) {
    console.log(i);
}

console.log("----output 1-10: odd then even----")

// * output: 1, 3, 5, 7, 9
// * output: 2, 4, 6, 8, 10

for(let i = 1; i < 10; i += 2){
    console.log(i);

}

for(let i = 2; i <=10; i += 2){
    console.log(i)
}

// *shared in class from Phung and very neat

// for(let i=1; i<10;i+=2)
//     console.log(i);
//     if(i===9){
//         i=0
//     }


console.log("----output multiplies of 3 from 6 to 60----")

for(let i = 6; i <= 60; i += 3) {
    console.log(i);
}


console.log("----hashtag pyramid----")

for(let i = "#"; i <= "#######"; i+= "#") {
    console.log(i)
}


console.log("----print even numbers----")

// for(let i = ) {

// }

console.log("----prints 'prime' for prime, 'even' for even, 'odd' for odd from 1 to 20----")

// for(let i=1; i<=20; i++){
//     // console.log(i);

//     if(i % 2 === 0) {
//         console.log(i + " is even");

//     } else if (i % 2 !== 0) (
//         console.log(i + " is odd")
//     )
// }

// for (let i = 2; 1 <= 20; i++) {
//     // Prime Number
//     // a whole number greater than 1 than cannot be exactly divided by any whole number other than itself (e.g. 2, 3, 5, 7, 11)
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         // console.log(j + " - " + i);
//         if (i % j === 0){
//             // console.log(i + " not a prime number");
//             isPrime = false;
//         } 
//     }

//     if (isPrime) {
//         console.log(i + " is a prime number");
//     }
// }


for (let i = 0; i <= 3; i++){
// //     console.log(i + " outer loop");

    for(let j = 0; j < 3; j++) {
// //         console.log(j, " inner loop");
    }
}

console.log("----While Loops----")

let counter = 0

while(counter <= 5){
    console.log(counter);
    if(counter === 3){
        counter++
    }

    if(counter === 4){
        break; // stop or break out of the loop
    }
    counter++
}


console.log("----Countdown with While Loop----")

// variable definition
let countdown = 10

//condition
while (countdown >= 0){
    console.log(countdown);

    // incrementor
    countdown--
}


console.log("----'While' exercise: print multiples of 3 while less than 35----")

let intMultThr = 3

while (intMultThr < 35) {
    console.log(intMultThr)

    intMultThr+=3
}


console.log("----'While' exercise: print multiples of 5 while less than 100----")

let intMultFiv = 5

while (intMultFiv < 100) {
    console.log(intMultFiv);

    intMultFiv+=5
}


console.log("----'While' exercise: print integers btw 0 and 20; if multiplies of 2, output multiplies of 3----")

let counter1 = 2

while (counter1 <= 20) {
    if (counter1 % 2 === 0) {
        let number = counter1*3
        console.log(number);
    }
    counter1++; 
}


console.log("----'While' exercise: print prime numbers between 0-20----")

// let num3 = 2;

// while(num3<=20){
//     let isPrime = true;
//     let i=2;

//     //checks if num is divisible by any numbers from i to num
//     while(i<num3){
//         if(num3%i===0){
//             isPrime = false;
//             break;
//         }
//         i++
//     }

//     if(isPrime){
//         console.log(num3);
//     }
//     num3++
// }

// Otmane solution

let i = 2;
while (i < 20) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
    }
    } 
    if(isPrime) {
        console.log(`${i}`);
    }
    i++
}