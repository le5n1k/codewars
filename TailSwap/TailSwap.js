/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
 */

function tailSwap(arr) {
    let tail1;
    let tail2;
    let head1;
    let head2;

    head1=arr[0].slice(0,arr[0].indexOf(':')+1);
    head2=arr[1].slice(0,arr[1].indexOf(':')+1);

    tail1=arr[0].slice(arr[0].indexOf(':')+1, arr[0].length);
    tail2=arr[1].slice(arr[1].indexOf(':')+1, arr[1].length);

    arr[0]=head1+tail2;
    arr[1]=head2+tail1;
    return arr;
}

let arr=["abc:123", "cde:456"];
console.log(arr);
arr=tailSwap(arr);
console.log(arr);