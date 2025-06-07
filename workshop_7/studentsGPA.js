const students = [
    {
        name: "nick",
        GPA: 3.2
    },
    {
        name: "Maya",
        GPA: 3.5
    },
    {
        name: "Valery",
        GPA: 2.8
    }
];

console.log(students.length);
let totalGPA = 0;
for (let i = 0; i < students.length; i++) {
    totalGPA += students[i].GPA;
}

const avg = totalGPA / students.length;
console.log(avg);