function removeFirstAndLastCharacter1(str) {
    return str.slice(1, -1);
}

function removeFirstAndLastCharacter2(str) {
    str = str.replace(str[0],"");
    str = str.replace(str[str.length-1],"")
    return str;
}
removeFirstAndLastCharacter1();
removeFirstAndLastCharacter2();