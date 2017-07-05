function rot13(str) { // LBH QVQ VG!
    var newChar = "";
    var charCode = 0;
    var arr = str.split("");
    var str ="";

    for (i = 0; i < arr.length; i++) {
        newChar = arr[i];
        charCode = newChar.charCodeAt();
        if ((charCode >= 78) && (charCode <= 90)) {
            charCode = newChar.charCodeAt() - 13;
        }
        else if ((charCode >= 65) && (charCode <= 77)) {
            charCode = newChar.charCodeAt() + 13;
        }
        else
            charCode = newChar.charCodeAt();
     newChar = String.fromCharCode(charCode);

        arr[i] = newChar;}
str = arr.join('');
return str;
}

console.log(rot13("SERR YBIR?"));


