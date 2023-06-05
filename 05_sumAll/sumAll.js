const sumAll = function(num1, num2) {
    let finalSum = 0;
    let n;
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else if (num1 < num2) {
        for (n = num1; n <= num2; n++) {
            finalSum += n;
        }
    } else {
        for (n = num2; n <= num1; n++) {
            finalSum += n;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
