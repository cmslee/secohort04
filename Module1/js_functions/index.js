//Call function at the top; definition on bottom

sayHello()
// sayBye() // <--this will give you error! (see note below (2))
// sayHelloWorld() // <-- this will also give you error (ibid)

//* primary ways to define a function

// (1) Function Declaration (aka Function Definition)
function sayHello() {
    // body of the function is here
    console.log("Hello!");
}

/* will be hoisted to top */

// (2) Function Expression
const sayBye = function(){
    console.log("Bye!");
}

/* hoisting will not work with expression; expressions have to be initialized */

// (3) Arrow Functions vs. Function Declaration
const sayHelloWorld = () => {
    console.log("Hello World!");
}

/* hoisting will not work with arrow functions; arrow functions have to be initialized */


//* Parameters/Arguments

// define function 
function add(num1, num2) {
    console.log("From function", num1, num2)
    return num1 + num2;
}

// execute function
const result = add(3, 5)
console.log(result);


// let's write another function

function areBothEven(n1, n2){
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(4, 7);
console.log(isEven);


// let's write function with Extra Arguments

// ...by using ARGUMENTS object to code the function:

// function getDevObject(name, lastName) {
//     const skills = [];
//     for(let i=2; i<arguments.length; i++){
//         skills.push(arguments[i]);
//     }
//     return{
//         devName: name, 
//         devLastName: lastName,
//         jobSkills: skills,
//     }
// }

// const devObj = getDevObject("Maria", "Smith", "html","css","js","react");
// console.log(devObj);

// ...by using Rest Parameters

function getDevObject(name, lastName, ...skills){
    // const copyArr = [...skills]
    return{
        devName: name,
        devLastname: lastName,
        devSkills: skills,
    }
};

const devObj = getDevObject("Maria", "Smith", "html","css","js","react");
console.log(devObj);


// let's write function to set Default Parameters (i.e. default arguments)
function setColor (bike, color = "purple"){
    return {
        bikeColor: color,
    }
}

// define a function with an array of colors
const colorsArr = ['red', 'green', 'blue'];
// use the forEach or anonymous ___ to...
colorsArr.forEach(function(color) {
    console.log(color.toUpperCase())
})

console.log(window);


--


//1. create function and the parameter will be an array
function getArrLength(arr){
    // 3. in function, create another array and set blank brackets to make sure that whatever the variable is, it will be an array 
    let lengthArr = []
    // 4.
    for (let i=0; i<arr.length; i++){
    // when value pass through parameter, it will come here and become number, the length (arr[i].length), but where will it go? we will push to lengthArr, where it is ready to be returned one loop level up.
        arr[i].length;
    }
    //2. note that 
    return lengthArr;
}