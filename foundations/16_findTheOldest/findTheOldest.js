const findTheOldest = function(array) {
    let age;
    let OldestAge = 0;
    let Oldest;

    array.forEach(element => {
        if(!(element.yearOfDeath)){
            age = 2025 - element.yearOfBirth
        }else{
            age = element.yearOfDeath - element.yearOfBirth;
        }
        if(age > OldestAge){
            OldestAge = age;
            Oldest = element;
        }
    });

    return Oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
