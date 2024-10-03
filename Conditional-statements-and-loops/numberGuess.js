const correctNumber = 3;

let guess = (prompt("Guess a number between 1 and 10:"));

while (guess !== correctNumber) {
    if (guess < correctNumber) {
        console.log("Too low!");
    } else if (guess > correctNumber) {
        console.log("Too high!");
    }
 
    guess = (prompt("Guess a number between 1 and 10:"));
}

console.log("Correct!");;