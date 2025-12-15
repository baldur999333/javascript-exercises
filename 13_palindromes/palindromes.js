const palindromes = function (string) {
    string = string.toLocaleLowerCase();
    let re = /[^\w]/g;
    string = string.replace(re, '');
    string = string.split('');
    let reverse = string.slice();
    reverse.reverse();

    return reverse.join() == string.join();
};

// console.log(palindromes('zzzA car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
