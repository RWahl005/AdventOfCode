package me.ryan.day3;

/**
 * This class stores information for the part 2 final answer.
 * This class stores the two equal vectors, the only difference being
 * their step values.
 */
public class DoubleVector2 implements Comparable<DoubleVector2>{
    private Vector2 vecOne;
    private Vector2 vecTwo;

    public DoubleVector2(Vector2 vecOne, Vector2 vecTwo){
        this.vecOne = vecOne;
        this.vecTwo = vecTwo;
    }

    /**
     * Simple getter for vector one
     * @return The first vector.
     */
    public Vector2 getVectorOne(){
        return vecOne;
    }

    public Vector2 getVectorTwo(){
        return vecTwo;
    }

    /**
     * Calculate the answer for part 2
     * @return The answer for part 2.
     */
    public int getAnswer(){
        return getVectorOne().getSteps() + getVectorTwo().getSteps();
    }

    /**
     * This method is from the Generic Interface, Comparable.
     * @param o The other object to compare too.
     * @return (If the value is negative, then it knows that this class is smaller than the other class).
     */
    @Override
    public int compareTo(DoubleVector2 o) {
        return (getVectorOne().getSteps() + getVectorTwo().getSteps()) - (o.getVectorOne().getSteps() + o.getVectorTwo().getSteps());
    }

    /**
     * This method is overridden from the Object object.
     * @return The string form of this object.
     */
    @Override
    public String toString(){
        return "{@" + vecOne.getSteps() + "; @" + vecTwo.getSteps() + "}";
    }

    /**
     * This method is overriden from the Object object.
     * @param o The other object to compare to.
     * @return If the two objects are equal to each other.
     */
    @Override
    public boolean equals(Object o){
        if(!(o instanceof DoubleVector2)) return false;
        DoubleVector2 dv = (DoubleVector2) o;
        return dv.getVectorOne().equals(dv.getVectorTwo());
    }
}
