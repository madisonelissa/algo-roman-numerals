import math

def to_roman(num, res=''):
    roman_nums = {
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
    }
    if num == 0:
        return res
    for k, v in roman_nums.items():
        if num >= v:
            res = res + k
            num = num - v
            return to_roman(num, res)

print(to_roman(1251)) #=='MCCLI')
print(to_roman(1)) #== 'I')
print(to_roman(3)) #== 'III')
print(to_roman(4)) #== 'IV')