const removeFromArray = function(array, ...args) {
    const filtered = array.filter(item => !args.includes(item));
    console.log(filtered);
    return filtered;
};
removeFromArray([1, 2, 2, 3, 4, 5], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
