#include <iostream>
#include <vector>
using namespace std;


//linear Search using recursion
int find(int array[], int target , int index) {
  if(index== (array.size())) {
    return -1;
  }

  return array[index]==target ||  find(array,target , index+1);
}

int main() {
    std::vector<int> array = {1,2,3,4};
    int target = 3;   //target num
    int Sindex = 0; //starting index
    cout<< find(array,target,Sindex);
}