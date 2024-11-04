console.log("Archit")
console.log(Math.PI)
console.log(Math.max(758, 845, 10))
console.log(Math.min(758, 845, 10))

let curr = new Date()
console.log(curr)


/*let src = {
    name: "Archit",
    age: 20,
    id: 101
}

let dest = { ...src }

src.age = 23
console.log(src)
dest.id = 102
console.log(dest)*/


let src = {
    name: "Archit",
    age: 20,
    id: 101
}

let dest = Object.assign({}, src)
src.age = 23
console.log(src)
dest.id = 102
console.log(dest)
