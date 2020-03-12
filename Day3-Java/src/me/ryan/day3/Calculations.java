package me.ryan.day3;

import java.util.*;
import java.util.stream.Collectors;

/**
 * This class is responsible for the calculations
 * done to track the wires.
 *
 * @author Ryan Wahl
 */
public class Calculations implements Runnable {

    /**
     * Input One and Two are the formatted lists.
     */
    private List<String> inputOne;
    private List<String> inputTwo;

    /**
     * finalOne and finalTwo are the final traced lists.
     *
     * finalOutputPartOne stores the sorted output for the first part.
     */
    private List<Vector2> finalOne, finalTwo, finalOutputPartOne;

    /**
     * Stores the sorted output for the second part.
     */
    private List<DoubleVector2> finalOutput;

    public Calculations(String inputOne, String inputTwo){
        this.inputOne = inputToArray(inputOne);
        this.inputTwo = inputToArray(inputTwo);

        finalOne = new ArrayList<>();
        finalTwo = new ArrayList<>();
        finalOutputPartOne = new ArrayList<>();
        finalOutput = new ArrayList<>();

        finalOne = walkLine(this.inputOne);
        finalTwo = walkLine(this.inputTwo);
    }

    /**
     * This is called when the thread runs.
     */
    @Override
    public void run() {
        // Loops through all of the vectors from the first input.
        for (Vector2 vec : finalOne){
            /*
                Find the index of the vector in the second input.
                Java Note: If the vector "vec" can't be found in the second list, then -1 is returned.
             */
            int index = finalTwo.indexOf(vec);
            // Checking to see if the index value is greater than or equal to 0
            if(index >= 0){
                // Add to the final output
                finalOutput.add(new DoubleVector2(vec, finalTwo.get(index)));
                // add to the first part final output.
                finalOutputPartOne.add(vec);
            }
        }
        //Remove all values that would be zero. (The value steps is set to (third parameter) doesn't matter. See the
        // comments in the DoubleVector and Vector classes to see why).
        finalOutput.remove(new DoubleVector2(new Vector2(0, 0,0), new Vector2(0, 0, 0)));
        finalOutputPartOne.remove(new Vector2(0, 0, 0));

        // Use lambda to automatically sort the lists and return the sorted list.
        // To see how the lists are sorted see the respective classes.
        List<DoubleVector2> output = finalOutput.stream().sorted().collect(Collectors.toList());
        List<Vector2> outputOne = finalOutputPartOne.stream().sorted().collect(Collectors.toList());

        // Print out the answers.
        if(Main.partOne)
            System.out.println(outputOne.get(0).getAnswer());
        else
            System.out.println(output.get(0).getAnswer());

        System.out.println(outputOne);

    }

    /**
     * Format the input string into a list.
     * @param st The input string.
     * @return The list
     */
    public List<String> inputToArray(String st){
        return Arrays.asList(st.split(","));
    }

    /**
     * Get all of the vector points for the lines.
     * @param input The input values.
     * @return The list of vector points.
     */
    public List<Vector2> walkLine(List<String> input){
        // Keeps track of the current vectors x and y coords.
        int x = 0;
        int y = 0;
       List<Vector2> output = new ArrayList<>();
       // Calculates the amount of steps it took to get to said vector.
       int steps = 0;
        for(String s : input){
            int temp = 0;
            // Get the first character.
            switch(s.charAt(0)){
                case 'R':
                    // Stores the number after the letter added to the current x position.
                    temp = x + Integer.parseInt(s.substring(1));
                    // loop through all of the vector points it takes to get to the final vector.
                    for(int i = x; i < temp; i++){
                        output.add(new Vector2(i, y, steps));
                        steps += 1;
                    }
                    // Adds the number after the letter to the current x position.
                    x += Integer.parseInt(s.substring(1));
                    break;
                case 'L':
                    temp = x - Integer.parseInt(s.substring(1));
                    // List counts down since it is going in the negative x direction.
                    for(int i = x; i > temp; i--){
                        output.add(new Vector2(i, y, steps));
                        steps += 1;
                    }
                    x -= Integer.parseInt(s.substring(1));
                    break;
                case 'U':
                    temp = y + Integer.parseInt(s.substring(1));
                    for(int i = y; i < temp; i++){
                        output.add(new Vector2(x, i, steps));
                        steps += 1;
                    }
                    y += Integer.parseInt(s.substring(1));
                    break;
                case 'D':
                    temp = y - Integer.parseInt(s.substring(1));
                    // Counts down since it is going in the negative y direction.
                    for(int i = y; i > temp; i--){
                        output.add(new Vector2(x, i, steps));
                        steps += 1;
                    }
                    y -= Integer.parseInt(s.substring(1));
                    break;
            }
        }
        return output;
    }
}
