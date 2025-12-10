const repeatString = function(text, amount) {
    if(amount < 0)
        return "ERROR";
    let result = ""
    for(let i = 0; i < amount; ++i){
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
