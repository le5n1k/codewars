/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy".
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lowed case letters and in some cases spaces.

Good luck!
 */

function solve(str){
    let str1=str;
    str1=str1.replace(/ /g,'');
    str1=str1.split("");
    str1=str1.reverse();
    str1=str1.join("");
    let strs="";
    let stre="";
    for(let i=0;i<str.length;i++) {
        if (str[i]===" ") {
            strs=str1.substring(0,i);
            stre=str1.substring(i,str1.length);
            str1=strs+" "+stre;
        }
    }
    return str1;
}

console.log(solve("our code"));