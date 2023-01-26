## Problem1- Number of Arithmetic Triplets:
1. Difficulty- Easy 
2. [QuestionLink](https://leetcode.com/problems/number-of-arithmetic-triplets/)
3. Approach - Three pointer / for loops.
4. Language - C++


5.Solution
 
    int arithmeticTriplets(vector<int>& nums, int diff) {
       int count =0;
        for(int i =0 ; i<nums.size();i++)
        {
            for( int j = i+1; j<nums.size();j++)
            {
                if(nums[j]-nums[i]==diff)
                {
                    for(int k=j+1;k<nums.size();k++)
                    {
                        if(nums[k] - nums[j] == diff)
                        {
                            count++;
                        }
                    }
                }
            }
            
        }
        return count;
 
        
 
