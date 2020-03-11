package me.ryan.day3;

/**
 * Stores the data for the Vectors
 */
public class Vector2 implements Comparable<Vector2> {
    private int x;
    private int y;

    private int steps;

    public Vector2(int x, int y, int steps){
        this.x = x;
        this.y = y;
        this.steps = steps;
    }

    /**
     * Get the x value
     * @return The x value.
     */
    public int getX(){
        return x;
    }

    /**
     * Get the y value
     * @return The y value.
     */
    public int getY(){
        return y;
    }

    /**
     * Get the amount of steps it takes to get to the vector
     * @return The steps
     */
    public int getSteps(){
        return steps;
    }

    /**
     * Get the answer for part one
     * @return The answer
     */
    public int getAnswer(){
        return (Math.abs(this.x) + Math.abs(this.y));
    }

    /**
     * This method is overridden from the Object object.
     * @return The string form of this object.
     */
    @Override
    public String toString(){
        return "{" + x + ", " + y + "}";
    }

    /**
     * This method is overriden from the Object object.
     * (Notice how I only check to see if the x and y values are equal, not the steps).
     * @param o The other object to compare to.
     * @return If the two objects are equal to each other.
     */
    @Override
    public boolean equals(Object o){
        if(!(o instanceof Vector2)) return false;
        Vector2 other = (Vector2) o;
        return other.x == x && other.y == y;
    }

    /**
     * This method is from the Generic Interface, Comparable.
     * @param o The other object to compare too.
     * @return (If the value is negative, then it knows that this class is smaller than the other class).
     */
    @Override
    public int compareTo(Vector2 o) {
        return (Math.abs(this.x) + Math.abs(this.y)) - (Math.abs(o.getX()) + Math.abs(o.getY()));
    }

}
