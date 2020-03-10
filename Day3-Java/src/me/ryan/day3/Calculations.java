package me.ryan.day3;

import java.util.*;
import java.util.stream.Collectors;

public class Calculations implements Runnable {

    private List<String> inputOne;
    private List<String> inputTwo;

    private List<Vector2> finalOne = new ArrayList<>();
    private List<Vector2> finalTwo = new ArrayList<>();

    private List<Vector2> finalOutput = new ArrayList<>();

    public Calculations(String inputOne, String inputTwo){
        this.inputOne = inputToArray(inputOne);
        this.inputTwo = inputToArray(inputTwo);

        finalOne = walkLine(this.inputOne);
        finalTwo = walkLine(this.inputTwo);
        System.out.println(finalTwo);
    }

    @Override
    public void run() {
        for (Vector2 vec : finalOne){
            if(finalTwo.contains(vec)){
                finalOutput.add(vec);
            }
        }

        System.out.println(finalOutput);

        finalOutput.remove(new Vector2(0, 0));
        List<Vector2> output = finalOutput.stream().sorted().collect(Collectors.toList());
        System.out.println(output.get(0).getAnswer());

    }

    public List<String> inputToArray(String st){
        return Arrays.asList(st.split(","));
    }

    public List<Vector2> walkLine(List<String> input){
        int x = 0;
        int y = 0;
       List<Vector2> output = new ArrayList<>();
        for(String s : input){
            int temp = 0;
            switch(s.charAt(0)){
                case 'R':
                    temp = x + Integer.parseInt(s.substring(1));
                    for(int i = x; i <= temp; i++){
                        output.add(new Vector2(i, y));
                    }
                    x += Integer.parseInt(s.substring(1));
                    break;
                case 'L':
                    temp = x - Integer.parseInt(s.substring(1));
                    for(int i = x; i >= temp; i--){
                        output.add(new Vector2(i, y));
                    }
                    x -= Integer.parseInt(s.substring(1));
                    break;
                case 'U':
                    temp = y + Integer.parseInt(s.substring(1));
                    for(int i = y; i <= temp; i++){
                        output.add(new Vector2(x, i));
                    }
                    y += Integer.parseInt(s.substring(1));
                    break;
                case 'D':
                    temp = y - Integer.parseInt(s.substring(1));
                    for(int i = y; i >= temp; i--){
                        output.add(new Vector2(x, i));
                    }
                    y -= Integer.parseInt(s.substring(1));
                    break;
            }
        }
        return output;
    }
}
