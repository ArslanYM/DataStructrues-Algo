#include <iostream>
using namespace std;

//needs fix

 static void rev1(int n , int sum ) 
{
    if(n==0){
        return 0;
    }
    
    int rem = n%10;
    sum = sum*10 + rem;
    return rev1(n/10);
}
int main(){
    int n =1234;
    cout << rev1(sum) << endl;
}
