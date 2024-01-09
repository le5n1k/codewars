function digitize(n){
    let arr=[];
    if (n===0){
        arr.push(n)
        return arr;
    }
    for(;n>0;)
    {
        arr.push(n%10)
        n=Math.floor(n/10)
    }

    return arr;
}

console.log(digitize(0))