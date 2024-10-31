
// //Array is collection of data of varous/similar datatypes
// let arr1 = [1, 2, 3, 4, 5]
// console.log(arr1)
// arr1.push(6) //inserts the element at the end
// arr1.push(7)
// console.log(arr1)


// arr1.pop() //removes the last element in the array
// console.log(arr1)



// /*console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])*/

// arr1.shift() //removes the first element ie the left most element
// console.log(arr1)

// arr1.unshift(27) //inserts the element in the first index
// console.log(arr1)

// console.log(arr1.slice(2, 5))//breakdowns the array 

// console.log(arr1.splice(1, 3, "Archit"))

// // let arr2 = new Array("Archit", 1, 2, 3, 4, 6)
// // console.log(arr2)


// // map function in javascript
// let arr = [3, 8, 9, 4, 7, 10, 15, 18, 19]
// let ans = arr.map((num) => {
//     return num * num;
// })

// console.log(ans)

// arr.map((number, index) => {
//     console.log(`Element ${number} in present at index ${index}`)
// })


// // Filter function in javascript
// let even = arr.filter((number) => {
//     return (number % 2) === 0
// })

// console.log(even)

// //reduce method in JS
// let vc = [10, 20, 30, 50]
// let res = vc.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// console.log(res)

// let pqr = [5, 7, 9, 4, 6, 2, 1, 4, 5, 8, 7]
// pqr.sort();
// console.log(pqr)
// console.log(pqr.indexOf(9))
// pqr.forEach((value, index) => {
//     console.log(`Number is ${value} and index is ${index}`)
// })


let a = [10, 20, 30, 40, 50]
let sum = 0
a.forEach((number) => {
    sum += number
})

console.log(sum)