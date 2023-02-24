
class Ship {

    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
    }
}

class PlayerShip extends Ship {
    }

class AlienShip extends Ship {

    constructor () {
        super()
        let hullArr = [3, 4, 5, 6]
        let randomNum = Math.floor(Math.random(hullArr.length)*4);
        this.hull = hullArr[randomNum]
        let firepowerArr = [2, 3, 4];
        let randomNum2 = Math.floor(Math.random(firepowerArr.length)*3);
        this.firepower = firepowerArr[randomNum2]
        let accuracyArr = [0.6, 0.7, 0.8];
        let randomNum3 = Math.floor(Math.random(accuracyArr.length)*3)
        this.accuracy = accuracyArr[randomNum3]
    }
}

/*
class Alienship extends Ship {

    constructor () {
        super()
        this.hull = Math.round(Math.random()*(6-3)+3);
        this.firepower = Math.ceil(Math.random()*3)+1;
        this.accuracy = (Math.floor(Math.random()*3)+6)/10;
    }
}
*/

const USS_Assembly = new PlayerShip (20, 5, 0.7)
console.log(USS_Assembly)

const alienShip1 = new AlienShip()
const alienShip2 = new AlienShip()
const alienShip3 = new AlienShip()
const alienShip4 = new AlienShip()
const alienShip5 = new AlienShip()
const alienShip6 = new AlienShip()

console.log(alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6)
