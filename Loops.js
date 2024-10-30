console.log("Hello World");

for (let i = 1; i <= 5; i++) {
    console.log("Hello World in For loop");
}

let x = 0
while (x <= 5) {
    console.log("Hello World in While loop");
    x++;
}


for (let i = 10; i >= 0; i--) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);

}
for (let i = 1; i <= 50; i++) {
    if (i % 3 != 0) {
        continue;
    }
    console.log(i);
}

console.log("Do while loop....")
let i = 1;

do {
    console.log(i);
    i++;
} while (i < 10);

let j = 10;

do {
    console.log(j);
    j--;
} while (j > 0);

