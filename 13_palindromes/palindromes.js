const palindromes = function (str) {
    correctedStr = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").replace(/\s/g, '').toLowerCase();
    reversedStr = correctedStr.split('').reverse().join('');
    return correctedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
