const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 === 0 && year % 400 === 0) {   // years divisible by 100 are not leap years unless they are divisible by 400
            return true;
        } else if (year % 100 !== 0) {   // other years divisible by 4 but not by 100 will be leap years
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
