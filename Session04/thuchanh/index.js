// Câu 1

let n = +prompt("Mời bạn nhập một số nguyên dương: ");

if (n % 2 === 0) {
    console.log(`Số ${n} là số chẵn`);

} else {
    console.log(` Số ${n} là số lẻ`);
}

if (n > 0) {
    console.log(` số ${n} là số dương`);

} else if (n < 0) {
    console.log(` Số ${n} là số âm`);
} else {
    console.log(` Số ${n} bằng 0`);
}

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        console.log("Các số là: " + i);
    }
} else {
    console.log("Giá trị n ko hợp lệ để tạo dẫy số: ");
}

// Câu 2: 
let sumFizz = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz: " + i);
    } else if (i % 3 === 0) {
        console.log("Fizz: " + i);
        sumFizz += i;
    } else if (i % 5 === 0) {
        console.log("Buzz: " + i);
    } else {
        console.log("Số ko chia hết: " + i);
    }
}
console.log("Tổng các số in ra 'Fizz' là:" + sumFizz);




