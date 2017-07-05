function palindrome(str) {
  // Good luck!

    str = str.toLowerCase();

    // str = str.replace(/\_/g,'');
    //   str = str.replace(/\W/g,'');

str = str.replace(/\_|\W/g,'');

   str1 = str.split("").reverse().join("");

console.log(str);
    return (str === str1) ;

}


console.log(palindrome("+_ueyeu+_*-+/__+"));
