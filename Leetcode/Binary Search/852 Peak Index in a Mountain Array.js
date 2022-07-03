/**
 * @param {number[]} arr
 * @return {number}
 */
//Linear Scan
let peakIndexInMountainArray = function(arr) {
    let i = 0
    while (arr[i] < arr[i + 1]) {
        i++
    }
    return i
}

/* Binary Search

var peakIndexInMountainArray = function(arr) {
    let lo = 0
    let hi = arr.length - 1
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2)
        if (arr[mid] < arr[mid + 1]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return lo
};
 */