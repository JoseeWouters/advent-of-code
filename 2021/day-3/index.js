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

function getMostChars(input, index) {
    let zero = 0;
    let one = 0;
    for (let i = 0; i < input.length; i++) {
        let character = input[i].charAt(index);
        character === "0" ? zero += 1 : one += 1;
    }
    const bit = zero > one ? "0" : "1";

    return bit;
}

function getLeastChars(input, index) {
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
function getOxygenRatingValue(oxygenInput) {
    if (oxygenInput.length === 1 ) {
        return oxygenRatingValue = oxygenInput[0];
    }

    for (let i = 0; i < 12; i++) {
        let mostZeroesOrOnes = getMostChars(oxygenInput, i);
        oxygenInput = oxygenInput.filter(item => item.charAt(i) === mostZeroesOrOnes);
    }
    getOxygenRatingValue(oxygenInput);
}

let co2ScrubbingValue = "";
function getco2RatingValue(co2Input) {
    if (co2Input.length <= 1 ) {
        return co2ScrubbingValue = co2Input[0];
    }

    for (let i = 0; i < 12; i++) {
        const leastZeroesOrOnes = getLeastChars(co2Input, i);
        co2Input = co2Input.filter(item => item.charAt(i) === leastZeroesOrOnes);
        if (co2Input.length < 3) {break;} 
    }

    getco2RatingValue(co2Input);
}

function getLifeSupport() {
    getOxygenRatingValue(input);
    getco2RatingValue(input);

    const oxygenValueDecimal = parseInt(oxygenRatingValue, 2);
    const co2ValueDecimal = parseInt(co2ScrubbingValue, 2);

    return oxygenValueDecimal * co2ValueDecimal;
}

main.innerHTML = getLifeSupport();
