function confirmEnding(str, target) {
    // Good luck!
    var length = str.length;
    var endingLength = target.length;
    var ending = str.substr( length-endingLength);
return(target === ending) ;
}
    console.log(confirmEnding("He has to give me a new name", "name"));