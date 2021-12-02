import input from "./input.js";
const main = document.querySelector(".main");
let answer;

let forward = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < input.length; i++ ) {
    for (const [key, value] of Object.entries(input[i])) {
        let amount = parseInt(value, 10)
        if(key === "forward") {
            forward += amount;
            depth += amount * aim;
        }
        if(key === "down") {
            aim += amount;
        }
        if(key === "up") {
            aim -= amount;
        }
    }    
}
answer = forward * depth;

main.innerHTML = answer;