let myName = 'Justin';
// My name

const states = 50;
// Number of states in the U.S.

let sum = 5 + 4;
// The sum of 2 numbers

function sayHello() {
    alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

checkAge("Chuck", 34);
checkAge("Lance", 15);
checkAge("Matt", 20);
checkAge("Brad", 23);

let vegetables = ['Broccoli', 'Carrot', 'Avocado', 'Celery', 'Collards'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);

}

let pet = {
    name: 'Brock',
    breed: 'Bulldog'
};

let people = [
    {
        name: 'Dawn',
        age: 29
    },
    {
        name: 'Jason',
        age: 19
    },
    {
        name: 'Chris',
        age: 50
    },
    {
        name: 'Will',
        age: 13
    },
    {
        name: 'Zach',
        age: 24
    }
];

function getLength(word) {
    return word.length;
}