/*
Reverse a message so that the words and letters passed into it are made lower case and reversed.
In addition, capitalise the first letter of the newly reversed words.
If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.
 */

function reverseMessage(str) {
    str+=" ";
    str=str.split(""); //разбивает строку по чарам на массив
    for(let i=0;i<str.length;i++) {
        str[i]=str[i].toLowerCase();
    }

    for(let i=0;i<str.length-1;i++) {
        if (str[i]!==" " && str[i+1]===" ") {
            str[i]=str[i].toUpperCase();
        }
    }
    str=str.reverse(); //переворачивает массив
    str=str.join(""); //соединяет массив в строку
    str=str.substring(1);
    return str;
}

let str="Helli There";
console.log(reverseMessage(str));