/**
 * @param {number} num
 * @return {boolean}
 */

let num = 16
let isPerfectSquare = function(num) {
    if (num < 2) {
        return true
    }
    let lo = 0
    let hi = num
    while (lo <= hi) {
        let mid = Math.floor((hi + lo) / 2)
        let square = mid ** 2
        if (square == num) {
            return true
        } else if (square < num) {
            lo = mid + 1
        } else if (square > num) {
            hi = mid - 1
        }
    }
    return false
}