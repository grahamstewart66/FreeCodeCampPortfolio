function repeatStringNumTimes(str, num) {
    // Good luck!

   var  strTimes = "";
for (i = 0; i < num; i++) {

  strTimes = strTimes + str;
}
return strTimes;
}
    console.log(repeatStringNumTimes("abc", 5));