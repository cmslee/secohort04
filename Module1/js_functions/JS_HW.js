// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers (x, y){
    if (x >= y){
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3,9));

// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfThree = function(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1;
    } if (num2 > num1 && num2 > num3){
        return num2;
    } else {
        return num3;
    }
}
console.log(maxOfThree(3,5,1));

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char){
    char = char.toLowerCase()
    if (char === "a" || char === "e" ||char === "i" || char === "o" || char === "u"){
        return true
    } 
    else {
        return false
    }
}
console.log(isCharAVowel("G"));

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

function sumArray(arrayOfNumbers){
    let total = 0;
    for(let i=0; i<arrayOfNumbers.length; i++){
        total+=arrayOfNumbers[i]
    }
    return total
}
console.log(sumArray([2,4,5]));

// function sumArray(arrayOfNumbers) {
//     let sum =0;
//     for(let i=0;i<arrayOfNumbers.length;i++){
    
//     sum=sum+arrayOfNumbers[i];
//     }
// return sum;
// }

// console.log(sumArray([1,2,3,4]));

// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray (arrayOfNumbers){
    let product = 1
    for(let i=0; i<arrayOfNumbers.length; i++){
        product *= arrayOfNumbers[i]
    }
    return product
}

console.log(multiplyArray([2,4,5]));

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

function numArgs(args){
    let total = 0;
    for(let i=0; i<args.length; i++){
        total+=1
    }
    return total
}
console.log(numArgs([5, 4, 3, 8, 7]));


// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// function reverseString(args){
//     for(let i=0; i<args.length-1; i++){
//         total
//     }
// // }
// console.log(reverseString("statement"))

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].


