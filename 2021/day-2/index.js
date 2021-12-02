import input from "./input.js";
const main = document.querySelector(".main");
let answer;

let forward = 0;
let depth = 0;

for (let i = 0; i < input.length; i++ ) {
    for (const [key, value] of Object.entries(input[i])) {
        let amount = parseInt(value, 10)
        if(key === "forward") {
            forward += amount;
        }
        if(key === "down") {
            depth += amount;
        }
        if(key === "up") {
            depth -= amount;
        }
    }    
}

answer = forward * depth;

main.innerHTML = answer;