/*
DESCRIPTION:
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
 */

function anagramDifference(w1,w2){
    let count1= new Array(26);
    let count2=new Array(26);

    for(let i=0;i<26;i++) {
        count1[i]=0;
        count2[i]=0;
    }

    for (let i= 0;i<w1.length;i++) {
        count1[w1[i].charCodeAt(0) - 97]++;
    }

    for (let i= 0;i<w2.length;i++) {
        count2[w2[i].charCodeAt(0) - 97]++;
    }

    let ans=0;
    for(i=0;i<26;i++)
        ans+=Math.abs(count1[i]-count2[i]);
    return ans;
}
let w1='abcdee', w2= 'abe';
let ans;
ans=anagramDifference(w1,w2);
console.log(ans);