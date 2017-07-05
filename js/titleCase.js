function titleCase(str) {
    // Good luck!
    var newArray = [];
    var itemNew = "";
    var itemsArray = [];
    var itemNewArray = [];
    var itemArray = [];
    str = str.toLowerCase();
    itemsArray = str.split(" ");


    itemsArray.forEach(function (item, index, itemsArray) {
        itemNewArray = item.split("");

        itemArray = itemNewArray;
        itemArray[0] = itemNewArray[0].toUpperCase();
        itemNew = itemArray.join('');
        console.log(itemArray.join(''));

        // return  itemNew;
        newArray.push(itemNew);
    });


    items = newArray.join(" ");
    return items;


}


console.log(titleCase("SILLY bad little personalities needs to go away"));
