/*
In this kata, your job is to return the two distinct highest values in a list. If they're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
 */

function twoHighest(arr) {
    arr.sort(( a, b ) =>  b - a);
    for ( let i=0; i<arr.length; i++) {
        if (arr[i]!==arr[0]) {
            return [arr[0], arr[i]];
        }
    }
    if (arr.length!==0) {
        return [arr[0]];
    }
    return [];
}

let arr=[15];
console.log(twoHighest(arr));