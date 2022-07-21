/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1
Input: nums = [1,2,3,4,5,6,7], k = 3
 */


var rotate = function(nums, k) {
    let a = new Array()
    for (let i = 0; i < nums.length; i++)  {
        a[(i + k) % nums.length] = nums[i]
        /* a[i] =
        (0 + 3) % 7 = 3
        (1 + 3) % 7 = 4
        (2 + 3) % 7 = 5
        (3 + 3) % 7 = 6
        (4 + 3) % 7 = 0
        (5 + 3) % 7 = 1
        (6 + 3) % 7 = 2
        */
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = a[i]
    }
};