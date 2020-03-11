/*
    Day 5 in javascript.

    I hate the code for this, but it works, so yea.
*/

let usrInput = 5;
let output = 0;

const ParameterModes = {
    Position: 0,
    Immediate: 1
}

// The input
var input = "3,225,1,225,6,6,1100,1,238,225,104,0,1101,81,30,225,1102,9,63,225,1001,92,45,224,101,-83,224,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1102,41,38,225,1002,165,73,224,101,-2920,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,18,14,224,1001,224,-32,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,1101,67,38,225,1102,54,62,224,1001,224,-3348,224,4,224,1002,223,8,223,1001,224,1,224,1,224,223,223,1,161,169,224,101,-62,224,224,4,224,1002,223,8,223,101,1,224,224,1,223,224,223,2,14,18,224,1001,224,-1890,224,4,224,1002,223,8,223,101,3,224,224,1,223,224,223,1101,20,25,225,1102,40,11,225,1102,42,58,225,101,76,217,224,101,-153,224,224,4,224,102,8,223,223,1001,224,5,224,1,224,223,223,102,11,43,224,1001,224,-451,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1102,77,23,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,8,226,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,7,226,226,224,102,2,223,223,1006,224,344,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,359,101,1,223,223,1107,226,677,224,1002,223,2,223,1005,224,374,101,1,223,223,1008,677,226,224,1002,223,2,223,1005,224,389,101,1,223,223,1007,677,226,224,1002,223,2,223,1005,224,404,1001,223,1,223,1107,677,226,224,1002,223,2,223,1005,224,419,1001,223,1,223,108,677,226,224,102,2,223,223,1006,224,434,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,449,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,464,101,1,223,223,107,677,226,224,102,2,223,223,1006,224,479,101,1,223,223,1007,677,677,224,1002,223,2,223,1006,224,494,1001,223,1,223,1008,226,226,224,1002,223,2,223,1006,224,509,101,1,223,223,7,677,226,224,1002,223,2,223,1006,224,524,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,539,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,554,101,1,223,223,1008,677,677,224,102,2,223,223,1006,224,569,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,584,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,599,1001,223,1,223,1108,677,677,224,1002,223,2,223,1006,224,614,1001,223,1,223,1107,677,677,224,1002,223,2,223,1005,224,629,1001,223,1,223,108,226,226,224,1002,223,2,223,1005,224,644,101,1,223,223,8,226,226,224,1002,223,2,223,1005,224,659,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,674,101,1,223,223,4,223,99,226";

// Runs program
runData(input);

function runData(input){
    // Converts the string into an array.
    let array = proccessTextIntoArray(input);
    // The current index.
    let currentIndex = 0;
    // While the program is running.
    while(true){
        // Get the current operation code.
        let opcode = array[currentIndex];
        let stringOpCode = opcode.toString();
        //              Param  C (input)                 Param B (input)         Param A (output)
        let parModes = [ParameterModes.Position, ParameterModes.Position, ParameterModes.Position];
        // The actual code (1, 2, 3, 4, & 99).
        let code = 1;
        /*
            Checks all of the valid lengths and sets the parameter modes.
            (There is a better way to do this).
        */
        if(stringOpCode.length == 5){
            parModes[2] = parseInt(stringOpCode[0]);
            parModes[1] = parseInt(stringOpCode[1]);
            parModes[0] = parseInt(stringOpCode[2]);
            code = parseInt(stringOpCode[3] + stringOpCode[4]);
        } else if(stringOpCode.length == 4){
            parModes[1] = parseInt(stringOpCode[0]);
            parModes[0] = parseInt(stringOpCode[1]);
            code = parseInt(stringOpCode[2] + stringOpCode[3]);
        }else if(stringOpCode.length == 3){
            parModes[0] = parseInt(stringOpCode[0]);
            code = parseInt(stringOpCode[1] + stringOpCode[2]);
        }else{
            code = opcode;
        }

        // Gets the value of parameter one and parameter two based up parameter modes.
        let paramOne = parModes[0] == ParameterModes.Position ? array[array[currentIndex + 1]] : array[currentIndex + 1];
        let paramTwo = parModes[1] == ParameterModes.Position ? array[array[currentIndex + 2]] : array[currentIndex + 2];
        // Gets the third parameter.
        let paramThree = array[currentIndex + 3];

        // Does operations based upon the current code.
        if(code == 1){
            let add = paramOne + paramTwo;
            array[paramThree] = add;
            currentIndex += 4;
        }else if (code == 2){
            array[paramThree] = paramOne * paramTwo;
            currentIndex += 4;
        }else if(code == 3){
            array[array[currentIndex + 1]] = usrInput;
            currentIndex += 2;
        }else if(code == 4){
            output = array[paramOne];
            if(output == undefined){
                console.log("Final Answer: " + paramOne);
                break;
            }
            currentIndex += 2;
        }else if(code == 5){
            //Jump-true test.
            if(paramOne != 0){
                currentIndex = paramTwo;
            }
            else{
                currentIndex += 3;
            }
        }
        else if(code == 6){
            //Jump-false test.
            if(paramOne == 0){
                currentIndex = paramTwo;
            }
            else{
                currentIndex += 3;
            }
        }
        else if(code == 7){
            //less-than test
            if(paramOne < paramTwo){
                array[paramThree] = 1;
            }else{
                array[paramThree] = 0;
            }
            currentIndex += 4;
        }
        else if(code == 8){
            //equal test
            if(paramOne == paramTwo){
                array[paramThree] = 1;
            }else{
                array[paramThree] = 0;
            }
            currentIndex += 4;
        }
        else if(code == 99){
            break;
        }
        else{
            // Fail safe.
            console.log("ERROR");
            break;
        }
        // Fail Safe
        if(currentIndex >= array.length) break;
    }
}

function proccessTextIntoArray(data) {
    return data.split(",").map(v => parseInt(v));
}