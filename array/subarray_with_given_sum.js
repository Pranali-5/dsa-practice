/*
Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

Example 1:

Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.
Example 2:

Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.
*/

let n = 10;
let s = 15;
let a = [1,2,3,4,5,6,7,8,9,10];

// Time Complexity: O(N^2)
// Space Complexity: O(1)

function subarraySumBruteForce(){
    for (i=0;i<n;i++){
        let sum = 0;
        for(j=i;j<n;j++){
        sum +=a[j]
        if(sum==s){
            return [i+1, j+1]
        }
        }
    }
    return [-1]
}


// Time Complexity: O(N)
// Space Complexity: O(1)
function subarraySumOptimal(){
    let left = 0, sum = 0
    for(right = 0; right<n; right++){
        sum+=a[right];
        if(sum>s&& left <=right){
            sum-=a[left]
            left++;
        }
        if (sum === s) {
            return [left + 1, right + 1];
        }
    }
    return [-1]; 
}

console.log(subarraySumBruteForce())
console.log(subarraySumOptimal())
