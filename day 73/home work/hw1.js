const people = [
    { name: "John", age: 25, height: "180cm", gender: "male" },
    { name: "Jane", age: 30, height: "170cm", gender: "female" },
    { name: "Mike", age: 35, height: "175cm", gender: "male" },
    { name: "Anna", age: 28, height: "165cm", gender: "female" }
];

people.forEach((person, index) => {
    console.log(`${index + 1}) ადამიანი:`);
    console.log(`სახელი: ${person.name}`);
    console.log(`ასაკი: ${person.age}`);
    console.log(`სიმაღლე: ${person.height}`);
    console.log(`სქესი: ${person.gender}`);
    console.log('');
});
