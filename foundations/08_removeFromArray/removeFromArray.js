const removeFromArray = function(array,...args) {

    // for(let i = 0; i < array.length;i++){
    //     for(let j = 0;j < args.length;j++){
    //         if(array[i] === args[j]){
    //             array.splice(i,1);
    //             i -= 1;
    //         }
    //     }
    // } return array //changes the array

    filteredArray = [];
    array.forEach(element => {
        if(!args.includes(element)){
            filteredArray.push(element);
        }
    });

    return filteredArray;//doesn't changes the array
};

// Do not edit below this line
module.exports = removeFromArray;