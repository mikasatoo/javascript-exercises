const palindromes = function (str) {
    // let noPuncStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");    // remove punctuation characters and spaces

    // let reversedStr = noPuncStr
    //     .split("")    // split string into an array
    //     .reverse()    // reverse array
    //     .join("");     // join reversedArray back into a string
    
    // return noPuncStr.toLowerCase() === reversedStr.toLowerCase();

    
    // Optimised solution below:
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        while (start < end && !isAlphaNumeric(str[start])) {
            start++;
        }
        while (start < end && !isAlphaNumeric(str[end])) {
            end--;
        }
        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

function isAlphaNumeric(char) {
    return /^[a-z0-9]+$/i.test(char);
};

// Do not edit below this line
module.exports = palindromes;
