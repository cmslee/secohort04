// (1a) Declare a new class
// (1b) Declare default properties
class Player {
    legs = 2;
    arms = 2;
    eyes = 2;
    health = 500;
    damage = 100;

    // (1c) create constructor for specific properties

    constructor(name, age, hair){
        this.name = name;
        this.age = age;
        this.hair = hair;
        this.lovesPizza = true;
    }

    // (5a) use instance method to set up greeting
    // (5b) add parameter, use parameter, and pass argument in parenthesis at corresponding instace at (6) so Luigi and Mario greet one another
    // (5c) add a default object of address so that it is never blank
    greet(otherCharacter = "friend"){
        console.log(`Hello, ${otherCharacter}!`);
    }

    // (7) use instance method to set up attack
    // (7a) by adding "this.name" to logged text, calls object this method is assigned to
    attack() {
        console.log(`${this.name} is attacking!`)
    }


    takeDamage(damage){
        this.health -= damage;
        console.log(`${this.name}'s health level has dropped to ${this.health}`);
    }

    //(8) use Setter method to set properties in instances 
    setHair(newHairColor){
        this.hair = newHairColor;
    }

    //(9) use Getter method to get and check properties in those instances
    getHair(){
        console.log(this.hair);
        return this.hair; //gives you back value so you can store it in a method; this may get deleted later when there is a better example...
    }
    // Setters and Getters are used for encapsulation, where the main issue is to bound properties and methods to object in a way that is hidden to user, i.e. can only be accessible via Setters and Getters.
}

// (2)Declare new objects
// (2a) Once class properties for character added, add values to pass through
const mario = new Player ("Mario",32,"black");
const luigi = new Player ("Luigi", 30, "brown");

//(6) call method and assign it to object using dot notation
mario.greet("Luigi");
luigi.greet("Mario");

mario.attack();
luigi.attack();

// (3) Check type 
console.log(typeof mario);
console.log(typeof luigi);


// (4) Check if variable is instances of correct class
console.log(mario instanceof Player) // true

// update a prop using dot notation
mario.hair = "yellow"
console.log(mario.hair);

mario.setHair("red") // this is overriding or setting property so must set value
mario.getHair(); // don't have to set value because just getting something back
// const newHair = mario.getHair()
// console.log(newHair);
console.log(mario);

// come back to private property issue: basically, it can be created by adding # to a property.
// Michael	Schultz 10:25 AM
// it might be helpful to think of setting parts of an object to private as glass around a museum exhibit
// you define methods to access/interact with the private portions of an object to allow CONTROLLED access/interaction
// just like the glass around the exhibit, you may not want to allow open, unfettered access, but people can still interact with it in ways you allow (like looking at the exhibit, or reading a summary, etc.)

class Friend extends Player {
    //(11b)after adding new skills, initialize a constructor and define parameters: send name, age, hair to super class to initialize and add ...skills to indicate that all else should be stored to array called skills. Then designate this.skills that only affects Friends class
    constructor(name, age, hair, ...skills) {
        super(name, age, hair); //sends values to the parent
        this.skills = skills; // new array of skills
    }

    fly(){
        console.log(`${this.name} is flying...`)
    }
    // overriding attack method from parent class
    attack() {
        console.log("Fireball!!!!!");
    }

    doubleAttack(){
        //you can access parent class properties and functions from here
        super.attack();
        //then you can combine things from parent class and child class, if you want to...this is usually used to initiate new features in Friend class
        this.attack();
    }
}

class Enemy extends Player {
    
}

//(11) try adding some skills from here 
const toad = new Friend("Toad", 18, "mushroom", "builder", "conversationalist", "quick_feet");
const bowser = new Enemy("Bowser", 38, null);

// initialize toad flying
toad.fly()

// initialize mario attack
mario.attack()

// assign bowser set hair
bowser.setHair("hot pink")

// (a) initialize toad attack: it will say "Toad is attacking" unless overriding attack added in Friend extended from Player class
// (b) after adding overriding attack under Fried class, it will update to "Fireball!!!!!"
toad.attack()
toad.doubleAttack()

// Check to make sure constructor, class properties, and related functions correct
console.log(mario);
console.log(luigi);
console.log(toad);
console.log(bowser);

console.log(bowser);
const randomNum = Math.floor(Math.random() * 2)
console.log(randomNum);

if (randomNum < 1) {
    bowser.takeDamage(luigi.damage)
}