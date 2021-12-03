import input from "./input.js";
const main = document.querySelector(".main");

function getPowerConsumption() {
    return generateGammaRate() * generateEpsilonRate();
}

function generateGammaRate() {
    let gammaRate = "";
    for(let i = 0; i < 12; i++) {
        gammaRate += getGammaCharacter(i);
    }
    return parseInt(gammaRate, 2);
}

function generateEpsilonRate() {
    let epsilonRate = "";
    for(let i = 0; i < 12; i++) {
        epsilonRate += getEpsilonCharacter(i);
    }
    return parseInt(epsilonRate, 2);
}

function getGammaCharacter(index) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < input.length; i++ ) {
        let character = input[i].charAt(index);
        character === "0" ? zero += 1 : one += 1;
    }
    const bit = zero > one ? "0" : "1";

    return bit;
}

function getEpsilonCharacter(index) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < input.length; i++ ) {
        let character = input[i].charAt(index);
        character === "0" ? zero += 1 : one += 1;
    }
    const bit = zero < one ? "0" : "1";

    return bit;
}

main.innerHTML = getPowerConsumption();
