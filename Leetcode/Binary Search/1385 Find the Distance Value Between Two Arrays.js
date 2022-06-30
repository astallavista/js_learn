// Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

let findTheDistanceValue = function(arr1, arr2, d) {
   arr1.sort((a,b)=>a-b), arr2.sort((a,b)=>a-b)
    let l = 0, r = 0, count = 0

    for(let i = 0; i < arr1.length; i++) {
    while(arr2[l] < arr1[i] - d) {l++}
        while(arr2[r] <= arr1[i] + d) {r++}
        count +=(l == r)
    }
    return count
}