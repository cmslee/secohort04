
console.log("----prints 'prime' for prime, 'even' for even, 'odd' for odd from 1 to 20----")

for(let i=1; i<=20; i++){
    // console.log(i);

    if(i % 2 === 0) {
        console.log(i + " is even");

    } else if (i % 2 !== 0) (
        console.log(i + " is odd")
    )
}

console.log("----the Prime numbers problem---- (make sure your i's are not 1's lolsob)")

for (let i = 2; i <= 20; i++) {
    // Prime Number
    // a whole number greater than 1 than cannot be exactly divided by any whole number other than itself (e.g. 2, 3, 5, 7, 11)
    let isPrime = true;
    console.log(i)

    for (let j = 2; j < i; j++) {
        // console.log(j + " - " + i);
        if (i % j === 0){
            // console.log(i + " not a prime number");
            isPrime = false;
        } 
    }

    if (isPrime) {
        console.log(i + " is a prime number");
    }
}





// for (let i = 0; i <= 3; i++){
//     console.log(i + " outer loop");

//     for(let j = 0, j < 3, j++) {
//         console.log(j, " inner loop");
//     }
// }


// Mike S — 02/02/2023 5:40 PM

// const isPrime = (num) =>
// {
//     if (num < 1)
//     {
//         return false;
//     }
//     if (num === 1)
//     {
//         return true;
//     }
//     for (let i = 2; i < num; i++)
//     {
//         if (num % i === 0)
//         {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 1; i <= 20; i++)
// {
//     let resultStr = ""
//     if (isPrime(i))
//     {
//         resultStr += i + ' is prime. '
//     }
//     if (i % 2 === 0)
//     {
//         resultStr += i + ' is even.'
//     } else
//     {
//         resultStr += i + ' is odd.'
//     }
//     console.log(resultStr)
// }