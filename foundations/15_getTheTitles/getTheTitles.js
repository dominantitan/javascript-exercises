const getTheTitles = function(array) {
    let titleArray = [];

    for(let i = 0;i < array.length;i++){
        titleArray[i] = array[i].title;
    }

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
