var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
// let user = true;
// let user = "Jane User";
// let user = {
//   firstName: '王',
//   lastName: '小'
// }
var user = new Student('王', '小', '二');
document.body.innerHTML = greeter(user);
