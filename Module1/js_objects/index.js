
// Objects are used to model things in real life by creating properties built with key: value pairs

const house = {
    address: {
        street: "123 MainSt",
        apt: 122,
        state: "NY",
        zipcode: 10033
    },
};

house.rooms = 4;
house.hasPool = false;

house.address.state = "NJ"

// console.log(house);

// Week 3 / Day 3

const adventurer = {
    name: "Timothy",
    hitPoints: 10,
    belongings: ["sword", "potion", "Tums"]
}

console.log(adventurer);

// Now let's try to log aspects of this object? To start: How do I log the items in belongings?

//(1)
for(let i=0; i<adventurer.belongings.length; i++){
    console.log(adventurer.belongings[i]);
}

//(2)
for(item of adventurer.belongings){
    console.log(item);
}

// What about the properties?
for(prop in adventurer){
    console.log(prop);
}

// What about if content exists?

//(1) does it have property "name"?
console.log("name" in adventurer);
//(2) does it have property "hitPoints"?
const propName = "points"
console.log("hitPoints" in adventurer)

//You can add new properties and values using dot notation.

adventurer.health = 1000

//You can add methods and functions
adventurer.sayHi = function(){
    console.log("Hi there!");
}
adventurer.sayHi()

// Add a property using square brackets

adventurer["companion"] = {
    name: "Velma",
    type: "Bat"
}

// "THIS" = "in THIS instance of" or "i want THIS one"