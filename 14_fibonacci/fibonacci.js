const fibonacci = function(num) {
    if (typeof num !== "number"){
        num = parseInt(num)
    };
    if (num < 0) {
        return "OOPS"
    };
    if (num == 0){
        return 0
    } else {
        let fib = [1, 1];
        for (let i = fib.length; i < num; i++) {
            let nextNum = fib[fib.length - 1] + fib[fib.length - 2];
            fib.push(nextNum);
        };
        return fib[fib.length - 1];
    };
};

// Do not edit below this line
module.exports = fibonacci;
