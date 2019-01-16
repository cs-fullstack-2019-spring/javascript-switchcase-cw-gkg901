// Put the start of your program in a main function. Create an attendance array. Ask the user if a teacher, student, or parent is checking in. Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.

mainThree();
function mainThree() {

    attendance = [];
    do {
        var input = prompt("Are you a teacher, student, or parent?");

        switch (input) {

            case "teacher":
                attendance.push("teacher");
                console.log(input);
                break;
            case "student":
                attendance.push("student");
                console.log(input);
                break;
            case "parent":
                attendance.push("parent");
                console.log(input);
                break;
        }
    } while (input !== "q")
}
