//higher order functions takes another function as an argument
/*function square(n) {
    return n * n
}

const arr = [1, 2, 3, 4, 5]
const ans = arr.map(square)
console.log(ans)*/

const arr = [1, 2, 3, 4, 5]
const ans1 = arr.map((nums) => {
    return nums * nums
})
console.log(ans1)

const ans2 = arr.filter((nums) => {
    return nums % 2 == 0
})

console.log(ans2)