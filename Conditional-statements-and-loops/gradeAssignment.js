let score = prompt("Please enter your score:");

if (score >= 90) {
    console.log("excellent.");
} else if (score >= 80 && score <= 89) {
    console.log("good.");
} else if (score >= 70 && score <= 79) {
    console.log("fair.");
} else {
    console.log("Needs improvement.");
}
