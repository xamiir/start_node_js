// const {nanoid} = require('nanoid');

// function getId() {
//     return nanoid().slice(0, 5);
// }

let students = [
    { id: '1', name: "omar ali ", school :"beledwein", grade: "A", age : "20" },
    { id: '2', name: "jamac siyaad ", school :"beledwein", grade: "A_plus", age : "22" },
    { id:'3', name: "mohamed jamaac  ", school :"mujamac ", grade: "B",age:"30" },
]

module.exports = {
    async getStudents() {
        return students;
    },
    async getStudent(id) {
        return students.find(student => student.id === id);
    },
   async addStudent({id,name,school,grade,age}) {
        const student = {
            id: id,
            name: name,
            school:school,
            grade:grade,
            age:age
        };
        students.push(student);
        return student;
    },
    async updateStudent(id, {name,school,grade,age}) {
        const student = students.find(student => student.id === id);
        if (!student) {
            return;
        }
        if (name) {
            student.name = name;
        }
        if (school) {
            student.school = school;
        }
        if (grade) {
            student.grade = grade;
        }
        if (age) {
            student.age = age;
        }
        return student;
    },
    async deleteStudent(id) {
        const student = students.find(student => student.id === id);
        if (!student) {
            return;
        }
        students = students.filter(student => student.id !== id);
        return student;
    }

    
}