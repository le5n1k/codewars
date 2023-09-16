/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
 */

    function solve(s){
        let ans="";
        let arr=[];
        s+="a";
        for(let i=0;i<s.length;i++) {
            if(!isNaN(s[i])) {
                ans+=s[i];
            }
            else {
                ans=(Number(ans));
                arr.push(ans);
                ans="";
            }
        }
        bubbleSortConcept1(arr);
        ans=arr[arr.length-1];
        ans=Number(ans);
        return ans;
    }

function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

console.log(solve("vih61w8oohj5"));
