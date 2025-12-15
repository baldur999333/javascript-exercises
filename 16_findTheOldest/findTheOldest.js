const findTheOldest = function(people) {
    const oldest = people.reduce((max, current) => {
        if(!('yearOfDeath' in max)){
            const d = new Date();
            max.yearOfDeath = d.getFullYear();
        }
        if(!('yearOfDeath' in current)){
            const d = new Date();
            current.yearOfDeath = d.getFullYear();
        }
        let maxAge = max.yearOfDeath-max.yearOfBirth;
        let currentAge = current.yearOfDeath-current.yearOfBirth;
        return (currentAge > maxAge) ? current : max;
    });
    return oldest;

};
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


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
