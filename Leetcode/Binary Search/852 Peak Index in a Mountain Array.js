/**
 * @param {number[]} arr
 * @return {number}
 */

let peakIndexInMountainArray = function(arr) {
    let i = 0
    while (arr[i] < arr[i + 1]) {
        i++
    }
    return i
}