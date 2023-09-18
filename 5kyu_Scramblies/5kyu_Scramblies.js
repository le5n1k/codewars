/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
 */

function scramble(str1, str2) {
    let count1= new Array(26);
    let count2= new Array(26);
    for(let i=0;i<26;i++) {
        count1[i]=0;
        count2[i]=0;
    }
    for (let i= 0;i<str1.length;i++) {
        count1[str1[i].charCodeAt(0) - 97]++;
    }
    for (let i= 0;i<str2.length;i++) {
        count2[str2[i].charCodeAt(0) - 97]++;
    }
    //console.log(count1);
    //console.log(count2);
    let b=true;
    for(let i=0;i<26;i++) {
        if(count1[i]<count2[i]) {
            b=false;
            break;
        }
    }
    return b;
}

console.log(scramble("lidanagorilla","danil"));

