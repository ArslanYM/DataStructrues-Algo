import java.sql.SQLOutput;

public class odd {
    public static void main(String[] args) {
        //enter num
        int n= 90;
        System.out.println(isOdd(n));
    }
    private static boolean isOdd(int n ) {
        return (n&1)==1;
    }
}
