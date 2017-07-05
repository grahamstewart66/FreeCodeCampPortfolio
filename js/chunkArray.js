function chunkArrayInGroups(arr, size) {
    var copy = [];
    while (arr.length > 0) {
        copy.push(arr.splice(0, size));
    }
    return copy;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));