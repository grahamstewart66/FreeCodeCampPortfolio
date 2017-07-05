//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(lookName, propertyName) {
// Only change code below this line
//var profile = contacts.firstName;

value = "";
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === lookName) {
            value = contacts[i][propertyName];
        }
        if (contacts[i][propertyName] === undefined) {value = "No such property"}
    }
    if (value === ""){value = "No such contact" }
    return value;

// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Sherlock", "likes"));


