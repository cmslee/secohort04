console.log("-----Creating Classes: class Cat-----");
// Cat assignment:  


class Cat {
    age = 2;
    numOfFriends = 2;
    excellentToeBeans = true;

    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    attractAttention() {
        console.log(`Stop what you're doing. ${this.name} says, "Mowrrrrrrrrrr!"`)
    }
    inYourWay() {
        console.log(`${this.name}, ${this.size}, is sitting on your keyboard.`)
    }
    eat() {
        console.log(`${this.name} is chewing.`)
    }
}

const cat1 = new Cat("Balle","largish", ["white", "grey", "brown"])
const cat2 = new Cat("Rina", "smallish", ["white","brown", "black"])

cat1.attractAttention()
cat2.inYourWay()

console.log(cat1)
console.log(cat2)


console.log("-----Constructors: class Pirate-----")
// Pirate assignment:

class Pirate {
    // create 3 properties that are set by the constructor
    constructor(name1, descript, weapon) {
        this.name1 = name1,
        this.descript = descript,
        this.weapon = weapon
    }
    
    //create 3 methods
    maintainHealth(){
        console.log(`${this.name} has acquired a box of oranges. You have staved off scurvy for another day!`)
    }
    
    groupActivity(){
        console.log(`The pirates are looting. ${this.name} looks a bit lost.`)
    }
    
    parlay(){
        console.log(`${this.name} has been sent to enemy ship. Will they be back...?`)
    }
}

const pirate1 = new Pirate("Jason", "brawny", "short 's' word")
const pirate2 = new Pirate("Odysseus", "burly", "broad 's' word")
const pirate3 = new Pirate("Klopse", "brutish", "dagger")
const pirate4 = new Pirate("Schnitzel", "blunt", "knife")
const pirate5 = new Pirate("Jimina", "subdued", "elbow")
const pirate6 = new Pirate("Hadena", "flashy", "fist")

//instantiate 2 arrays of 3 pirates
const arggghGo = [pirate1, pirate2, pirate3]
const notArggghGo = [pirate4, pirate5, pirate6]

console.log(pirate1)
console.log(arggghGo);
console.log(notArggghGo);

//loop over each array




//bring properties of three pirates


console.log("-----Static Methods and Properties: class Governor-----")
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

class Governor {
    constructor(firstName, lastName, yearsInOffice, famousFor){
        this.firstName = Montgomery;
        this.lastName = Burns;
        this.yearsInOffice = 150;
        this.famousFor = ["feeble constitution", "evil demeanor", "elusive veins"]
    }
    
    static greeting(){
        console.log("Ex...cellent.")
    }
    
    toString() {
        return `Please welcome to the stage our governor, ${this.firstName} ${this.lastName}.`
    }
}


/*
// Governor ${lastName} has been in office for ${yearsInOffice} years. During this time, he has come to be known for his ${famousFor[0]}, ${famousFor[1]}, and ${famousFor[2]}. Governor ${lastName}, a word?`;
*/
Governor.toString();
Governor.greeting();

// log the properties and test the methods (don't instantiate) ???

console.log("-----Static Methods and Properties: Inheritance-----")
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods