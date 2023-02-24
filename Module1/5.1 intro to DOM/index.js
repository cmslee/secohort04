const titleEl = document.getElementById ('title');
titleEl.style.backgroundColor = 'purple';
titleEl.style.padding = '15px';
titleEl.style.color = '#fff';

console.dir(titleEl);

//query selector uses CSS language 
const h2 = document.querySelector('h2');
const h1 = document.querySelector('.main-title')
const h1ID = document.querySelector('#title')

//if you try to select an element that is note there, it will return null
//if you try to select an element of which there are many, it will return the first one ONLY

//what if you want all of them? using query selector all will return a node list/array
const h2Elements = document.querySelectorAll('h2')

console.dir(h2)
console.dir(h1)
console.dir(h1ID)

console.log(h2Elements)
console.dir(h2Elements)

const p = document.querySelector('p')
//difference between innerText and innerHTML is the you can use HTML tags w/innerHTML
p.innerText = "new string value"
console.dir(p)


//Shopping list
const lis = document.querySelectorAll('li')
console.log(lis)

// for of loop for elements in list
for(element of lis){
    console.log(element)
}

// forEach and arrow function + index so that index # is listed, which is visually helpful
lis.forEach((element, index) => console.log(element, index))

//add predefined class with classList using add method
lis[0].classList.add('selected') //'Bread' gets formatted accordingly
lis[2].classList.add('selected')

//remove a class from the classlist
// ...by adding removed class
lis[1].classList.add('removed')
// ...w/remove method
lis[2].classList.remove('selected')

//check if the element contains the class argument
console.log(lis[0].classList.contains('removed'))

const comments = document.querySelector("#comments");
// add and remove class using toggle
comments.classList.toggle('selected') // if not added, will add and vice versa
comments.classList.toggle('selected')

//replace will replace old class for new and return boolean to confirm if method was succesful. not used very often. 
console.log(comments.classList.replace('selected', 'removed')) //currently false because 'selected' class not added to begin with

console.dir(comments);


// ===== Elements collections =====

// how to select and isolate certain lists?

const chatLis = document.querySelectorAll('#chat > li');
console.log(chatLis)


//an obsolete inflexible method, but followed by getaround
const allLis = document.getElementsByTagName('li');
//console.log(allLis);


// instead create a regular array from a collecion of values
const arrayOfLis = Array.from(allLis);
console.log(arrayOfLis)


// ===== Create Element and Add Attributes =====

// create a new element
const btn = document.createElement('button')
btn.textContent = "Click me!"

// set attribute (key-value pairs) to element
btn.setAttribute('class', "selected");
console.log(btn)

// get attribute from an element and set to new variable
const att = titleEl.getAttribute('id')
console.log(att)

// check attribute status of element with hasAttribute
console.log(titleEl.hasAttribute('class'))


// === add body to the DOM ===

//1. grab where you want to put it
const body = document.querySelector('body')
//2. append to the where
body.appendChild(btn)
//3. test it out
console.log(body)