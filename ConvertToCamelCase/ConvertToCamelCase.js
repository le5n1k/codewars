/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */
function toCamelCase(str){
    str=str.split("");
    for (let i=0;i<str.length-1;i++) {
        if (str[i]==='-' || str[i]==='_' ) {
            str[i+1]=str[i+1].toUpperCase();
            str[i]="";
        }
    }
    str=str.join("");
    return str;
}
let str='The_Stealth_Warrior';
str=toCamelCase(str);
console.log(str);