const tasks = {
    monday: "Go to school.",
    tuesday: "Eat veggies.",
    wednesday: "Work out.",
    thursday: "review your notes.",
    friday: "finish your assignments.",
    saturday: "Do your loundry.",
    sunday: "Go to church."
};

let day = prompt("Enter a day of the week:").toLowerCase();

if (tasks[day]) {
    console.log(tasks[day]);
} else {
    console.log("Invalid day. Please enter a valid day.");
}