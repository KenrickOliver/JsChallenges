// Day 17 of JS Challenges

/* Roman Numeral Converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    const converter = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let i = 0;
    let ans = '';

    while (num > 0) {
        const reducer = numbers[i]
        if( reducer > num) {
            i++;
        } else {
            num -= reducer
            ans += converter[reducer];
        }
    }

    return ans;
   }