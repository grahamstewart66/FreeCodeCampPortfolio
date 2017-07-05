function getIndexToIns(arr, num) {
    // Find my pvar arrlace in this sorted array.

    arr.sort(function (a, b) {
        return a - b;
    });
    var a = arr[arr.length - 1];
    if (num >= a) {
        return arr.length;
    } else
        for (i = 0; i < arr.length; i++) {

            if (num <= arr[i]) {
                return i;
            }

        }

}


console.log(getIndexToIns([5, 3, 20, 30], 31.2));


