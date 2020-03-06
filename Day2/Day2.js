/*
    Day 2 is coded in javascript since it is the language most equpited to handle this task.
*/
document.getElementById("run").onclick = (e) =>{
    var arr = proccessTextIntoArray(document.getElementById("input").value);
    arr[1] = 12;
    arr[2] = 2;
    for(let i = 0; i < arr.length; i+=4) {
        let opcode = arr[i];
        let location1 = arr[i + 1];
        let location2 = arr[i + 2];
        let storageLocation = arr[i + 3];
        let calculatedValue = 0;

        let value1 = arr[location1];
        let value2 = arr[location2];
        
        if(opcode == 1){
            calculatedValue = value1 + value2;
            arr[storageLocation] = calculatedValue;
        }
        else if(opcode == 2){
            calculatedValue = value1 * value2;
            arr[storageLocation] = calculatedValue;
        }
        else if(opcode == 99){
            break;
        }
        else{
            console.log("error");
        }
    }
    document.getElementById("output").innerText = arr[0];
}

function proccessTextIntoArray(data){
    return data.split(",").map(v => parseInt(v));
}