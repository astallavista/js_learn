/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [-1,0,3,5,9,12]
let target = 9

let search = function(nums, target) {
    if (nums.length == 1 & nums[0] == target) {
        return 0
    }
    let lo = 0
    let hi = nums.length -1
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            lo = mid + 1
        } else if (nums[mid] > target) {
            hi = mid - 1
        }
    }
    return -1
};