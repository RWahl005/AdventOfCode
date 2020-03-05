
//If you want the code to run based on the code for part 1.
const section1 = false;


/**
 * Section 1 - Javascript
 */
// Define the run button.
document.getElementById("run").onclick = (e) =>{
    // Take the defined input and put it into an array.
    var arr = proccessTextIntoArray(document.getElementById("input").value);
    // calculate the fuel and display the output.
    document.getElementById("output").innerHTML = calculateData(arr);
}

// Run the parser.
function proccessTextIntoArray(input){
    // break the string up at every new line character.
    var output = input.split("\n");
    return output;
}

// Calculate the array of data.
function calculateData(array){
    // The final output.
    var output = 0;
    // Loop through each data in the array.
    for(var data of array){
        // Set the output of the formula into the info.
        var info = Math.floor(data / 3) - 2;
        // Add it to the final fuel count.
        output += info;
        // If it is section one only then continue the loop
        if(section1) continue;
        //section two.
        var fuel = info;
        // Loop through until the fuel needed for the additional fuel is neglectable. (0 or a negative).
        while(true){
            // Calculate the fuel needed for the fuel.
            fuel = Math.floor(fuel / 3) -2;
            // If the fuel is neglectable then break.
            if(fuel <= 0) break;
            output += fuel;
        }
    }
    // Return the output.
    return output;
}