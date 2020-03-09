/*
    Day 3 is coded in javascript since it is the language most equpited to handle this task.
*/
document.getElementById("run").onclick = (e) =>{


    
    // document.getElementById("output").innerText = arr[0];
}

function proccessTextIntoArray(data){
    return data.split(",").map(v => v);
}

var finalListOfPointsLineOne = [];
var finalListOfPointsLineTwo = [];

var finalListOfPoints = [];

function findIntersection(){
    for(let d of finalListOfPointsLineOne){
        if(finalListOfPointsLineTwo.contains())
    }
}

function calculateAllValueForLineOne(data){
    let x = 0;
    let y = 0;
    for(var d of data){
        switch(d[0]){
            case 'R':
                let temp = x + parseInt(d.slice(1, d.length));
                for(let i = x; i < temp; i++){
                    finalListOfPointsLineOne.push([x,y]);
                }
                x += temp;
                break;
            case 'L':
                let temp = x - parseInt(d.slice(1, d.length));
                for(let i = x; i < temp; i--){
                    finalListOfPointsLineOne.push([x,y]);
                }
                x -= temp;
                break;
            case 'U':
                let temp = y + parseInt(d.slice(1, d.length));
                for(let i = y; i < temp; i++){
                    finalListOfPointsLineOne.push([x,y]);
                }
                y += temp;
                break;
            case 'D':
                let temp = y - parseInt(d.slice(1, d.length));
                for(let i = y; i < temp; i--){
                    finalListOfPointsLineOne.push([x,y]);
                }
                y -= temp;
                break;
        }
    }
}

function calculateAllValueForLineTwo(data){
    let x = 0;
    let y = 0;
    for(var d of data){
        switch(d[0]){
            case 'R':
                let temp = x + parseInt(d.slice(1, d.length));
                for(let i = x; i < temp; i++){
                    finalListOfPointsLineOne.push([x,y]);
                }
                x += temp;
                break;
            case 'L':
                let temp = x - parseInt(d.slice(1, d.length));
                for(let i = x; i < temp; i--){
                    finalListOfPointsLineOne.push([x,y]);
                }
                x -= temp;
                break;
            case 'U':
                let temp = y + parseInt(d.slice(1, d.length));
                for(let i = y; i < temp; i++){
                    finalListOfPointsLineOne.push([x,y]);
                }
                y += temp;
                break;
            case 'D':
                let temp = y - parseInt(d.slice(1, d.length));
                for(let i = y; i < temp; i--){
                    finalListOfPointsLineOne.push([x,y]);
                }
                y -= temp;
                break;
        }
    }
}