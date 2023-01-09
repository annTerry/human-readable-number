module.exports = function toReadable (number) {
 const numberWordsData = { 
0: "zero",
1: "one",
2: "two",
3: "three",
4: "four",
5: "five",
6: "six",
7: "seven",
8: "eight",
9: "nine",
10: "ten",
11: "eleven",
12: "twelve",
13: "thirteen",
14: "fourteen",
15: "fifteen",
16: "sixteen",
17: "seventeen",
18: "eighteen",
19: "nineteen",
20: "twenty",
30: "thirty",
40: "forty",
50: "fifty",
60: "sixty",
70: "seventy",
80: "eighty",
90: "ninety"};

if (number <= 20) {
  return numberWordsData[number];
}

const numberByNumber = number.toString().split('').reverse();
let result = "";
if (numberByNumber.length > 2) result += numberWordsData[numberByNumber[2]] + " hundred ";
if (numberByNumber[1] > 1) {
  result += numberWordsData[numberByNumber[1]*10] + " ";
  if (numberByNumber[0] > 0) result += numberWordsData[numberByNumber[0]];
}
else if (numberByNumber[0] > 0 || numberByNumber[1] > 0){
 result += numberWordsData[+(numberByNumber[1]+numberByNumber[0])];
}
return result.trim();
}
