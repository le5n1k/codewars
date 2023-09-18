/*
Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h

 */

function isValid(idn) {
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
    const str="[]{},./!@#%^&*()+=-*\\;:'~` "
    let f=false;
    for(let i=0;i<originalAlpha.length;i++) {
        if (originalAlpha[i]===idn[0]) f=true;
    }
    if(f){
        for(let i=1;i<idn.length;i++) {
            for(let j=0;j<str.length;j++)
                if (idn[i]===str[j] || idn[i]==='"') f=false;
        }
    }

    return f;
}
console.log(isValid("_"));