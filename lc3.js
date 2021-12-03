var symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

var romanToInt = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += symbolValues[s[i]]
        if(symbolValues[s[i]] > 1 && symbolValues[s[i - 1]] === 1) {
            count -= 2
        }
    }
    return count
};

console.log(romanToInt("IX"));
