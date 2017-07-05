function destroyer(arr) {
    // Remove all the values

    for (i = 1; i < arguments.length; i++) {
        var a = arguments[i];
        arr = arr.filter(function (word) {
            return word !== a;
        });
    }

return arr;

}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3],  5));


