package me.ryan.day3;

public class Vector2 implements Comparable<Vector2> {
    private int x;
    private int y;

    public Vector2(int x, int y){
        this.x = x;
        this.y = y;
    }

    public int getX(){
        return x;
    }

    public int getY(){
        return y;
    }

    public int getAnswer(){
        return (Math.abs(this.x) + Math.abs(this.y));
    }

    @Override
    public String toString(){
        return "{" + x + ", " + y + "}";
    }

    @Override
    public boolean equals(Object o){
        if(!(o instanceof Vector2)) return false;
        Vector2 other = (Vector2) o;
        return other.x == x && other.y == y;
    }

    @Override
    public int compareTo(Vector2 o) {
        return (Math.abs(this.x) + Math.abs(this.y)) - (Math.abs(o.getX()) + Math.abs(o.getY()));
    }
}
