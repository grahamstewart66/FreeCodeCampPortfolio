function golfScore(par, strokes) {
    // Only change code below this line


     result = strokes - par;

     console.log("result = "+ result);
          console.log("strokes =" + strokes);
            console.log("par = "+ par);


    if (strokes === 1) {
        return "Hole-in-one!";}
     else if (result <= -2) {
         return "Eagle";}
     else if (result === -1) {
         return "Birdie";}
    else if (result === 0) {
         return "Par";}
    else if (result === 1) {
         return "Bogey";}
    else if (result === 2) {
         return "Double Bogey";}
    else
         return "Go Home!";
}

console.log(golfScore(4,1));


