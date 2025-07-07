import java.util.Scanner;

public class input {
     public static void main(String[] args) {
        double x, y, sum;
        Scanner myNum = new Scanner(System.in);

        //System.out.print("Type a number: ");
        x = myNum.nextDouble();

        //System.out.print("Type another number: ");
        y = myNum.nextDouble();

        sum = x + y;
        System.out.println("Sum is: " + sum);

        myNum.close();
    }
    
}
