const removeFromArray = function(array,...args) {
    let elementToRemove = [];
    for(let i = 0; i < args.length;i++){
        elementToRemove[i] = args.at(i);
    }

    for(let i = 0; i < array.length;i++){
        for(let j = 0;j < elementToRemove.length;j++){
            if(array[i] === elementToRemove[j]){
                array.splice(i,1);
                i -= 1;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;