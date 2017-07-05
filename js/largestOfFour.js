
function largestOfFour(arr) {
    // Good luck!
    arr1 = [];
for (i = 0; i < arr.length; i++) {
    arr1 = arr[i];
    arr1.sort(function (a, b) {
        return b - a});
    arr[i] = arr1 [0];
}
    return arr;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
