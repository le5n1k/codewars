/*
You may assume that the input will always be valid.
a^b last need
Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9
lastDigit("10","10000000000")  // returns 0
 */

function f1(str1, str2){
    if (str1[str1.length-1]==="0" && str2!=="0") return 0;
    if (str1[str1.length-1]==="0" && str2==="0") return 1;
    if (str2==="0") return 1;
    if (str1[str1.length-1]==="5") return 5;
    if (str2==="1") return Number(str1[str1.length-1]);
    if (str1[str1.length-1]==="1") return 1;
    if (str1[str1.length-1]==="6" ) return 6;
    if(str2[str2.length-2]===undefined) {
        if (str1[str1.length-1]==="9" && Number(str2[str2.length-1])%2===0) return 1;
        if (str1[str1.length-1]==="9" && Number(str2[str2.length-1])%2===1) return 9;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-1])%4===1) return 8;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-1])%4===0) return 6;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-1])%4===2) return 4;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-1])%4===3) return 2;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-1])%4===0) return 1;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-1])%4===1) return 7;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-1])%4===2) return 9;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-1])%4===3) return 3;
        if (str1[str1.length-1]==="4" && Number(str2[str2.length-1])%2===0) return 6;
        if (str1[str1.length-1]==="4" && Number(str2[str2.length-1])%2===1) return 4;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-1])%4===0) return 1;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-1])%4===1) return 3;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-1])%4===2) return 9;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-1])%4===3) return 7;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-1])%4===0) return 6;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-1])%4===1) return 2;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-1])%4===2) return 4;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-1])%4===3) return 8;
    }
    else {
        if (str1[str1.length-1]==="9" && Number(str2[str2.length-2]+str2[str2.length-1])%2===0) return 1;
        if (str1[str1.length-1]==="9" && Number(str2[str2.length-2]+str2[str2.length-1])%2===1) return 9;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-2]+str2[str2.length-1])%4===1) return 8;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-2]+str2[str2.length-1])%4===0) return 6;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-2]+str2[str2.length-1])%4===2) return 4;
        if (str1[str1.length-1]==="8" && Number(str2[str2.length-2]+str2[str2.length-1])%4===3) return 2;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-2]+str2[str2.length-1])%4===0) return 1;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-2]+str2[str2.length-1])%4===1) return 7;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-2]+str2[str2.length-1])%4===2) return 9;
        if (str1[str1.length-1]==="7" && Number(str2[str2.length-2]+str2[str2.length-1])%4===3) return 3;
        if (str1[str1.length-1]==="4" && Number(str2[str2.length-2]+str2[str2.length-1])%2===0) return 6;
        if (str1[str1.length-1]==="4" && Number(str2[str2.length-2]+str2[str2.length-1])%2===1) return 4;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-2]+str2[str2.length-1])%4===0) return 1;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-2]+str2[str2.length-1])%4===1) return 3;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-2]+str2[str2.length-1])%4===2) return 9;
        if (str1[str1.length-1]==="3" && Number(str2[str2.length-2]+str2[str2.length-1])%4===3) return 7;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-2]+str2[str2.length-1])%4===0) return 6;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-2]+str2[str2.length-1])%4===1) return 2;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-2]+str2[str2.length-1])%4===2) return 4;
        if (str1[str1.length-1]==="2" && Number(str2[str2.length-2]+str2[str2.length-1])%4===3) return 8;

    }

}

console.log(f1("3715290469715693021198967285016729344580685479654510946723","68819615221552997273737174557165657483427362207517952651"));