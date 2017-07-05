var count = 0;

function cc(card) {
    // Only change code below this line


    switch (card) {
        case
        2:
            count++;
            break;
        case
        3:
            count++;
            break;
        case
        4:
            count++;
            break;
        case
        5:
            count++;
            break;
        case
        6:
            count++;
            break;
        case
        10:
            count--;
            break;

        case "J":
            count--;
            break;

        case "Q":
            count--;
            break;

        case "K":
            count--;
            break;

        case "A":
            count--;
            break;

    }
    if (count > 0){decision = " Bet"} else decision = " Hold";
    return (count + decision);



    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(7), cc(1), cc(2));


