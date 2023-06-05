const removeFromArray = function(myArray, myValue) {
    let arrayLen = myArray.length;
    for (let i = 0; i <= arrayLen; i++) {   // loop through array elements
        if (myArray[i] === myValue) {   // if array element equal to myValue
            myArray.splice(i, 1);     // remove one element from the specified position
        }
    }
    return myArray;
}

// Do not edit below this line
module.exports = removeFromArray;
