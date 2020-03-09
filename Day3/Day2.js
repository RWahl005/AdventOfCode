/*
    Day 2 is coded in javascript since it is the language most equpited to handle this task.
*/
document.getElementById("run").onclick = (e) =>{

    findValue();

    console.log("not found!");
    
    // document.getElementById("output").innerText = arr[0];
}

function findValue(){
    var arr = proccessTextIntoArray(document.getElementById("input").value);
    var copyArr = arr.slice(0, arr.length);
    for(var x = 0; x <= 100; x++){
        for(var y = 0; y <= 100; y ++){
            for(let i = 0; i < copyArr.length; i+=4) {
                let opcode = copyArr[i];
                let location1 = copyArr[i + 1];
                let location2 = copyArr[i + 2];
                let storageLocation = copyArr[i + 3];
                let calculatedValue = 0;
        
                let value1 = copyArr[location1];
                let value2 = copyArr[location2];
                
                if(opcode == 1){
                    calculatedValue = value1 + value2;
                    copyArr[storageLocation] = calculatedValue;
                }
                else if(opcode == 2){
                    calculatedValue = value1 * value2;
                    copyArr[storageLocation] = calculatedValue;
                }
                else if(opcode == 99){
                    break;
                }
                else{
                    console.log("error");
                }
            }
            if(copyArr[0] === 19690720){
                document.getElementById("output").innerText = 100 * x + (y-1);
                return;
            }
            console.log(copyArr);
            copyArr = arr.slice(0, arr.length);
            copyArr[1] = x;
            copyArr[2] = y;

        }
    }
}

function proccessTextIntoArray(data){
    return data.split(",").map(v => parseInt(v));
}