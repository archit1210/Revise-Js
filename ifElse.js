let age = 12

if (age >= 18) {
    console.log("You can vote..!!!");
} else {
    console.log("You cannot vote...!!!");
}

let percentile = 98.56;

if (percentile >= 99) {
    console.log("Computer");
}
else if (percentile >= 98) {
    console.log("IT");
}
else {
    console.log("EXTC");
}


let num1 = 10
let num2 = 20
let op = 0

switch (op) {
    case 1:
        console.log(num1 + num2)
        break
    case 2:
        console.log(num1 - num2)
        break
    case 3:
        console.log(num1 * num2)
        break
    case 4:
        console.log(num1 / num2)
        break
    case 5:
        console.log(num1 % num2)
        break
    default:
        console.log("Invalid operation");

}