#include <iostream>
using namespace std;


int mProd(int nums[],int n) {
        int i = 0;
        int j = 1;
        int prod=0;
        int maxi=0;
        while(i!=nums.size()-1) {
         prod = (nums[i]*nums[j]);
         maxi = std::max(prod, maxi);
         i++;
         j++;
        }
        return maxi;
}


int main() {
    int array[4]= {2,3,-2,4};
    int size= 4;
    cout<<mProd(array,size)<<endl;

}