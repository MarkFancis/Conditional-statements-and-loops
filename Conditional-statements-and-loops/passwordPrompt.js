const correctPassword = "Cs2C ";

userPassword = prompt("Enter your password:");
    if (userPassword !== correctPassword) {
        console.log("Wrong password. Try again.");
    }

    
     while (userPassword !== correctPassword);

console.log("Correct password. Access complete.")