class Student {
  fullname: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string,
  lastName?: string,
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + ' ' + person.lastName;
}

// let user = true;
// let user = "Jane User";
// let user = {
//   firstName: '王',
//   lastName: '小'
// }
let user = new Student('王', '小', '二')
document.body.innerHTML = greeter(user);
