const today = new Date()

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(objArr) {
for (const person of objArr) {
        if (person.hasOwnProperty("yearOfDeath") === false) {
            person.yearOfDeath = today.getFullYear();
        };
    };
    let mappedObjArr = objArr.map(person => person.yearOfDeath - person.yearOfBirth);
    let max = Math.max(...mappedObjArr);
    let rigthPerson = objArr.find(person => (person.yearOfDeath - person.yearOfBirth) == max);
    return rigthPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
