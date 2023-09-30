/*
Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

Worked Example
2520 ➞ 72

# The first and last digits are 2 and 0.
# 2 and 0 form 20.
# The second digit is 5 and the second to last digit is 2.
# 5 and 2 form 52.

# 20 + 52 = 72
Examples
121 ➞ 13
# 11 + 2

1039 ➞ 22
# 19 + 3

22225555 ➞ 100
# 25 + 25 + 25 + 25
Notes
If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
Any number which is zero-padded counts as a single digit (see example #2).
*/

function f(n) {
    let ns=String(n);
    let ans=0;
    let na=[];
    if (ns.length%2===0) {
        for (let i=0;i<ns.length/2;i++) {
            na.push(ns[i]+ns[ns.length-1-i]);
        }
        for(let i=0;i<na.length;i++) {
            ans+=parseInt(na[i]);
        }
        return ans;
    }

    for(let i=0;i<ns.length/2;i++) {
        na.push(ns[i]+ns[ns.length-1-i]);
    }
    for(let i=0;i<na.length-1;i++) {
        ans+=parseInt(na[i]);
    }
    ans+=na[na.length-1]%10;

    return ans;
}

console.log(f(121));