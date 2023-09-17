/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32-bit number: 2149583361

Complete the function that takes an unsigned 32-bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
 */

function int32ToIp(int32){
    int32=toBinary(int32);
    let arr=[];
    for (let i=0;i<int32.length;i=i+8) {
        arr.push(int32.substring(i,i+8));
    }
    arr=arr.reverse();
    for (let i=0;i<arr.length;i++) {
        arr[i]=arr[i].split("");
        arr[i]=arr[i].reverse();
        arr[i]=arr[i].join("");
    }
    let str="";
    if (arr.length===4) {
        for(let i=0;i<arr.length;i++) {
            str=str+parseInt(arr[i],2)+".";
        }
    }
    else if (arr.length===3) {
        str+="0.";
        for(let i=0;i<arr.length;i++) {
            str=str+parseInt(arr[i],2)+".";
        }
    }
    else if (arr.length===2) {
        str+="0.0.";
        for(let i=0;i<arr.length;i++) {
            str=str+parseInt(arr[i],2)+".";
        }
    }
    else if (arr.length===1) {
        str+="0.0.0.";
        for(let i=0;i<arr.length;i++) {
            str=str+parseInt(arr[i],2)+".";
        }
    }
    else if (arr.length===0) {
        str="0.0.0.0.";
    }

    str=str.slice(0,-1);
    return str;
}

function toBinary(n) {
    let ans="";
    while (n!==0) {
        ans+=n%2;
        n=Math.floor(n/2);
    }
    return ans;
}

console.log(int32ToIp(798));