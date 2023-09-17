/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message){
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    message=message.split("");
    let ans="";
    for(let i=0;i<message.length;i++) {
        if(isLetter(message[i])) {
            for (let j=0;j<originalAlpha.length;j++) {
                if (message[i]===originalAlpha[j]) {
                    ans+=cipher[j];
                }
            }
        }
        else ans+=message[i];
    }
    return ans;
}

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

console.log(rot13("Hello Dev World is awesome!"));

