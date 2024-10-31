// // class Human {
// //     //properties
// //     age = 21
// //     #wt = 70
// //     ht = 200

// //     //behaviour
// //     walking() {
// //         console.log("I am Walking");
// //     }

// //     running() {
// //         console.log("I am running")
// //     }

// //     get fetchWeight() {
// //         return this.#wt
// //     }
// // }

// // const obj = new Human()
// // console.log(obj.age)
// // console.log(obj.fetchWeight)
// // obj.walking()

// class Student {
//     name;
//     age;
//     roll_no;

//     constructor(name, age, roll_no) {
//         this.name = name;
//         this.age = age;
//         this.roll_no = roll_no
//     }

//     printData() {
//         console.log(`My name is ${this.name}.\nMy age is ${this.age}.\nMy roll nunber is ${this.roll_no}.`)
//     }
// }

// const s1 = new Student("Archit", 20, 32)
// s1.printData()

//default parameters

// function display(name = "Archit", age = 20) {
//     console.log(`Name is ${name}.\nAge is ${age}`)
// }

// display("Dhoni", 45)

function getaAge() {
    return 32
}

function display(name = "Archit", age = getaAge()) {
    console.log(`Name is ${name}.\nAge is ${age}`)
}

display("Dhoni")

