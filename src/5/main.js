const array = [777,23,12,43,32,65,82,21,0,99]

for (let j = 0; j < array.length - 1; j++)
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            // let temp = array[i + 1]
            // array[i + 1] = array[i]
            // array[i] = temp
            [array[i], array[i+1]] = [array[i+1], array[i]]
        }
    }

const names =["Hi", "Yo", "Hello", " Privet"]

names.sort().reverse()

const number = [ 2999, 1, 2983, 9999]

number.sort()

function comp(a,b) {
        if( a<= b) {
            return -100
        }
        else {
            return 2
        }
}

const shortComp = (a,b) => a - b

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

    students.sort((a,b) => b.scores -a.scores)
students.sort((a, b )=>  a.age -b.age).reverse().pop()

students.sort((a,b) => a.name < b.name ? -1 : 1)