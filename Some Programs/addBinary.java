public class addBinary {
    public static void main(String[] args) {
        String a = "11";
        String b = "1";
        System.out.println(binarySum(a,b));
    }
    public static String binarySum(String a, String b) {
        

        for(int i = a.length()-1; i >= 0 ; i++) {
            int carry = 0;
            if(a.charAt(i)=='1' && b.charAt(i)=='1'){res+=1;}

        }


        return res;
    }
}
