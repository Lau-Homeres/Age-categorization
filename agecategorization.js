// AgeCategorization.js

// User's age
let age = 60; 

// Age categorization using nested if-else statements
if (age < 5) {
    console.log("The user is categorized as a Toddler.");
} else if (age >= 5 && age <= 12) {
    console.log("The user is categorized as a Child.");
} else if (age >= 13 && age <= 19) {
    console.log("The user is categorized as a Teenager.");
} else if (age >= 20 && age <= 35) {
    console.log("The user is categorized as a Young Adult.");
} else if (age >= 36 && age <= 60) {
    console.log("The user is categorized as Middle-aged.");
} else {
    console.log("The user is categorized as a Senior.");
}
