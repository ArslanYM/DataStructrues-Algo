#include <iostream>
using namespace std;
int factorial(int n ) 
{
  if(n ==0 || n==1)
  return 1;

  return n * factorial(n-1);
}
int main()
{
    int n = 5 ; //print factorial of n
    cout << factorial(n) <<endl;

}