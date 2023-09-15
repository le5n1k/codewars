/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */
function solution(str){
    if(str.length%2!==0) {
        str+="_";
    }
    let Arr=[];
    for(let i=0;i<str.length;i=i+2)
    {
        Arr.push(str.substring(i,i+2));
    }
    return Arr;
}
console.log(solution("abcdef"));