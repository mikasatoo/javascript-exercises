const removeFromArray = function(myArray, ...myValues) {    // gather all the optional values into an array
    let arrayLen = myArray.length;

    myValues.forEach((myValue) => {     // iterate over each value in the myValues array
        for (let i = 0; i <= arrayLen; i++) {   // loop through array elements
            if (myArray[i] === myValue) {   // check if array element equal to myValue
                myArray.splice(i, 1);     // remove one element from the specified position
            }
        }
    });

    return myArray;
}

// Do not edit below this line
module.exports = removeFromArray;