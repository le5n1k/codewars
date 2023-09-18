/*
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
 */

function factors(x){
    let arr=[];
    if(!Number.isInteger(x) || x<0 || x===0) return -1;
    for(let i=1;i<x;i++) {
        if(x%i===0) {
            arr.push(i);
        }
    }
    arr.push(x);
    arr.reverse();
    return arr;
}

console.log(factors(42));