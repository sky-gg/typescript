function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
// let user = true;
// let user = "Jane User";
var user = {
    firstName: '王',
    lastName: '小'
};
document.body.innerHTML = greeter(user);
