 function toRoman(num, res) {
    const romanNumerals = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1
    };
    if (num === 0) {
        return res;
    };
    for (const i in romanNumerals) {
        if (num >= romanNumerals[i]) {
            res = res + i
            num = num - romanNumerals[i]
            return toRoman(num, res)
        };
    };
};

console.log(toRoman(2271, ''));
console.log(toRoman(1251, ''));
console.log(toRoman(1, ''));
console.log(toRoman(3, ''));
console.log(toRoman(4, ''));