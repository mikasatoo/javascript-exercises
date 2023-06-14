const findTheOldest = function(people) {
    // get current year
    let currentYear = new Date().getFullYear();
    let lastPerson;
    let nextPerson;

    // sort array of objects in descending order of age
    const sorted = people.sort((a, b) => {
        if ("yearOfDeath" in a) {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastPerson = currentYear - a.yearOfBirth;
        }

        if ("yearOfDeath" in b) {
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextPerson = currentYear - b.yearOfBirth;
        }

        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    });
    
    // return oldest person
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
