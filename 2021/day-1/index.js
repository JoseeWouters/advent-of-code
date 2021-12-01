import input from "./input.js";
const main = document.querySelector(".main");
let answer = 0;

for (let i = 0; i < input.length; i++) {
    let previousNum = input[i - 1];
    let currentNum = input[i];
    if (currentNum > previousNum) {
        answer += 1;
    }
}

main.innerHTML = answer;