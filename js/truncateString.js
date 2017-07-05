function truncateString(str, num) {
  // Clear out that junk in your trunk



    if (str.length <= num) {return str;} else

      if (num <=3 ){return str = str.slice(0,num) + "...";} else

          if (str.length > 3 )  { return str = str.slice(0,num - 3) + "...";}

        else return str = str.slice(0,num) + "...";


}

    console.log(truncateString("Absolutely Longer", 2));