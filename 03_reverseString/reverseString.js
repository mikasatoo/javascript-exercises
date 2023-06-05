const reverseString = function(string) {
    let output = string.split("");  // split characters into an array
    output.reverse();   // reverse order of elements in the array
    return output.join("");    // join array elements back into a string
    // could also join the above together in one line as: return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
