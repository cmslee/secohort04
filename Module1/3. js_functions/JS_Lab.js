console.log("---LAB---")

function addList() {
    console.log(arguments);
    let sum = 0
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    console.log(sum)
    return sum;
}

addList(1);
addList(1,50,1.23);
addList(7,-12);



