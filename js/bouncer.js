function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    var falseWords = arr.filter(function (word) {
            return Boolean(word);
        }
    );
    return falseWords;
}

console.log(bouncer([false, null, 1, NaN, undefined, ""]));


