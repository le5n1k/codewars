/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters

 */

function kebabize(str) {
    let ans="";
    if (str[0]===str[0].toUpperCase()) {
        ans+=str[0].toLowerCase();
    }
    else ans+=str[0];
    for(let i=1;i<str.length;i++) {
        if(str[i]===str[i].toUpperCase() && isNaN(str[i])) {
            ans=ans+"-"+str[i].toLowerCase();
        }
        else if (isNaN(str[i])) {
            ans+=str[i];
        }
    }
    return ans;
}

console.log(kebabize("myCamelHas3Humps"));