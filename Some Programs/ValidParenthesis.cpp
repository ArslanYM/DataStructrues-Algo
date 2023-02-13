#include <iostream>
using namespace std;


bool check(string s ) {
     if(s.size()==1)
        return false;
        int i =0;
        while( i < s.size()){
            if(s[i]=='(' && s[i+1]==')')
            {i+=2;}
            else
            return false;
            if(s[i]=='[' && s[i+1]==']')
            {i+=2;}
            else
            return false;
            if(s[i]=='{' && s[i+1]=='}')
            {i+=2;}
            else
            return false;
        }
        return true;
}

int main() {


     string str = "()";
     cout<<check(str);
}