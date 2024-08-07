function folding(a,b){
    let result=0
    while (a!==b) {
        if (a>b) {
            a=a-b
            result++
        }
        else if (b>a) {
            b=b-a
            result++
        }
    }
    if (a===b) result++
    return result
}

console.log(folding(2,1))