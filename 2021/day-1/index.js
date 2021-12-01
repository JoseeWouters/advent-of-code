import input from "./input.js";
const main = document.querySelector(".main");
let answer = 0;

// First puzzle
// for (let i = 0; i < input.length; i++) {
//     let previousNum = input[i - 1];
//     let currentNum = input[i];
//     if (currentNum > previousNum) {
//         answer += 1;
//     }
// }

// Second puzzle
for (let i = 0; i < input.length; i++) {
    let previousSum = input[i - 1] + input[i] + input[i + 1];
    let currentSum = input[i] + input[i + 1] + input[i + 2];
    if (currentSum > previousSum) {
        answer += 1;
    }
}

main.innerHTML = answer;