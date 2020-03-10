var start = "356261";
var end = "846303";

let numOfTime = 0;
for(let x = parseInt(start); x <= parseInt(end); x++){
    numOfTime += testResults(x.toString()) ? 1 : 0;
}
console.log(numOfTime);

function testResults(val){
    let previousItem = 0;
    let hasRepeat = false;
    for(let d of val){
        let num = parseInt(d);
        if(num < previousItem){
            return false;
        }
        if(num === previousItem){
            hasRepeat = true;
        }
        previousItem = num;
    }
    return hasRepeat;
}