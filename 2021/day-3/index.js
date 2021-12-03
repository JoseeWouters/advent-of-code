import input from "./input.js";
const main = document.querySelector(".main");

function getPowerConsumption() {
    return generateGammaRate() * generateEpsilonRate();
}

function generateGammaRate() {
    let gammaRate = "";
    for (let i = 0; i < 12; i++) {
        gammaRate += getMostChars(i);
    }
    return parseInt(gammaRate, 2);
}

function generateEpsilonRate() {
    let epsilonRate = "";
    for (let i = 0; i < 12; i++) {
        epsilonRate += getLeastChars(i);
    }
    return parseInt(epsilonRate, 2);
}

function getMostChars(index) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < input.length; i++) {
        let character = input[i].charAt(index);
        character === "0" ? zero += 1 : one += 1;
    }
    const bit = zero > one ? "0" : "1";

    return bit;
}

function getLeastChars(index) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < input.length; i++) {
        let character = input[i].charAt(index);
        character === "0" ? zero += 1 : one += 1;
    }
    const bit = zero <= one ? "0" : "1";

    return bit;
}

let oxygenRatingValue = "";
function getOxygenRatingValue(input) {
    if (input.length === 1 ) {
        return oxygenRatingValue = input[0];
    }

    for (let i = 0; i < 12; i++) {
        const mostZeroesOrOnes = getMostChars(i);
        input = input.filter(item => item.charAt(i) === mostZeroesOrOnes);
    }
    getOxygenRatingValue(input);
}

let co2ScrubbingValue = "";
function getco2RatingValue(input) {
    if (input.length === 1 ) {
        return co2ScrubbingValue = input[0];
    }

    for (let i = 0; i < 12; i++) {
        const mostZeroesOrOnes = getLeastChars(i);
        input = input.filter(item => item.charAt(i) === mostZeroesOrOnes);
    }
    getco2RatingValue(input);
}

function getLifeSupport() {
    getOxygenRatingValue(input);
    getco2RatingValue(input);

    const oxygenValueDecimal = parseInt(oxygenRatingValue, 2);
    const co2ValueDecimal = parseInt(co2ScrubbingValue, 2);

    return oxygenValueDecimal * co2ValueDecimal;
}

main.innerHTML = getLifeSupport();
