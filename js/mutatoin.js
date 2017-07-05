function mutation(arr) {

    var a = arr[0].toLowerCase();
    var b = arr[1].toLowerCase();
    var stringLen = b.length;

    for (i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) > -1) {
        } else return false;
    }
    return true;
}

console.log(mutation(["Alien", "lined"]));