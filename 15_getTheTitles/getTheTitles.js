const getTheTitles = function(objArr) {
    let titleArr = [];
    for (object of objArr) {
        titleArr.push(object.title);
    };
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
