const weekday = prompt("What day is it?").toLowerCase();
let weekdayNumber;

switch (weekday) {
    case "monday":
        weekdayNumber = 0;
        break;
    case "tuesday":
        weekdayNumber = 1;
        break;
    case "wednesday":
        weekdayNumber = 2;
        break;
    case "thursday":
        weekdayNumber = 3;
        break;
    case "friday":
        weekdayNumber = 4;
        break;
    case "saturday":
        weekdayNumber = 5;
        break;
    case "sunday":
        weekdayNumber = 6;
        break;
    default:
        console.log("That day does not exists!");
        break;
}

if (weekday === "monday") {
    weekdayNumber = 0;
} else if (weekday === "tuesday") {
    weekdayNumber = 1;
} else if (weekday === "wednesday") {
    weekdayNumber = 2;
} else if (weekday === "thursday") {
    weekdayNumber = 3;
} else if (weekday === "friday") {
    weekdayNumber = 4;
} else if (weekday === "saturday") {
    weekdayNumber = 5;
} else if (weekday === "sunday") {
    weekdayNumber = 6;
} else {
    console.log("That day does not exists!");
}

console.log("It is day " + String(weekdayNumber));