/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */
// complete the function
function solution(string) {
    let count=0;
    let len=string.length;
    for(let i=0;i<len;i++) {
        if(string[i]===string[i].toUpperCase()) {
            string=string.substring(count-i, i)+' '+string.substring(i,string.length);
            //console.log(i);
            i++;
        }
        count++;
    }
    return string;
}
console.log(solution("camelCaseCase"));