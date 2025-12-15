const fibonacci = function(num, prev = 0, cur = 1) {
    num = +num;
    if(num < 0 || num === NaN)
        return "OOPS";
    if(num === 0)
        return prev;
    let temp = cur + prev;
    prev = cur;
    cur = temp;
    return fibonacci (--num, prev, cur);

    


};
// console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;
