public class PascalsTriangle {
    public static void main(String[] args) {
        int nth = 6; //nth row number
        System.out.println(Check((nth)));
    }
    public static int Check(int n) {
    return 1<<n-1 ;
    }
}
