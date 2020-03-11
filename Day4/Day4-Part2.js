var start = "356261";

var end = "846303";

let array = [];

let numOfTime = 0;
for(let x = parseInt(start); x <= parseInt(end); x++){
    numOfTime += testResults(x.toString()) ? 1 : 0;
}
console.log(numOfTime);
console.log(testResults("3344555"));

function testResults(val){
    let previousItem = 0;
    let numDictionary = [
    ];
    for(let d of val){
        let num = parseInt(d);
        if(num < previousItem){
            return false;
        }
        if(num == previousItem){
            pushData(num);
        }
        previousItem = d;
    }
    return getResults();

    function pushData(num){
        if(!numDictionary.includes(num)){
            numDictionary.push(num);
        }
        numDictionary.push(num);
    }

    function getResults(){
        numDictionary.sort((a,b) => {
            return a-b;
        });
        numDictionary.push(99);
        let curIndex = 0;
        let len = 0;
        let prev = 0;
        let val = [];
        for(let d of numDictionary){
            if(d == prev){
                len++;
            }
            if(d != prev && curIndex != 0){
                if(len == 1){
                    val.push(true);
                }else{
                    val.push(false);
                }
                len = 0;
            }
            prev = d;
            curIndex++;
        }
        if(val[val.length - 1] == undefined) return false;

        return val.includes(true);
    }
}

