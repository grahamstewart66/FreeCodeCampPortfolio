function findLongestWord(str) {
    // Good luck!
    var newArray = [];
    itemsArray = str.split(" ");
    itemsArray.forEach(function (item, index, itemsArray) {
            newArray.push(item.length);
        }
    );
    console.log(newArray);
    newArray.sort(function (a, b) {
        return b - a;
    });
    return newArray[0];
}

// copy.push(item)

console.log(findLongestWord("silly bad little personalities needs to go away"));
