const reverseString = function(str) {
    const arr = str.split('');
    const reverseArr = arr.reverse();
    const reverStr = reverseArr.join('');
    return reverStr;
};

// Do not edit below this line
module.exports = reverseString;
