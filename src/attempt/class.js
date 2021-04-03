console.log(111)
class Person {
    getName() {
        console.log('zs')
    }
    handleName() {
        console.log('handleName')
    }
}
const person1 = new Person;
const person2 = new Person;
console.log(person1.getName === person2.getName, 'getName')
console.log(person1.handleName === person2.handleName, 'handleName')