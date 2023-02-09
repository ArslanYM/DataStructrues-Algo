#include <iostream>
using namespace std;
int sum(int n ) 
{
  if(n ==0 || n==1)
  return 1;

  return n + sum(n-1);
}
int main()
{
    int n = 5 ; //print sum upto n
    cout << sum(n) <<endl;

}