const removeFromArray = function(arr, rmElement) {
    const newArr = [];
    arr.forEach(element => {
        if (element !== rmElement) {
            newArr.push(element);
        };
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
