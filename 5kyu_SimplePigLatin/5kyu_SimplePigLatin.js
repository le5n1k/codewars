/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str){
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++) {
        if (arr[i]!=="!" && arr[i]!=="?" && arr[i]!=="." && arr[i]!==",") {
            arr[i] = arr[i] + arr[i][0] + "ay";
            arr[i] = arr[i].substring(1);
        }
    }
    let ans="";
    for (let i=0;i<arr.length;i++) {
        ans+=arr[i];
        ans+=" ";
    }
    ans=ans.slice(0,-1);
    return ans;
}

console.log(pigIt("Pig latin is cool !"));

