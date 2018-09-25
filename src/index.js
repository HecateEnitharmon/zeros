let getZerosCount = number => {
    let zeroCount = 0;
    let multiplier = 1;
    for (let i = 0; i < number; i++) {
        let countNum = number / (multiplier * 5);
        if (countNum <= 0) {
            break;
        }
        zeroCount = Math.floor(zeroCount + countNum);
        multiplier = multiplier * 5;
    }
    return zeroCount;
}

module.exports = getZerosCount;