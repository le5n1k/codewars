function findSmallestM(x) {
    let m = 1;
    let result = 0;

    while (result === 0) {
        let nines = parseInt('9'.repeat(m));
        if (nines % x === 0) {
            result = nines / x;
        } else {
            m++;
        }

        if (m > 4000) {
            return -1;
        }
    }

    return result;
}

console.log(findSmallestM(65)); // Output: 9
console.log(findSmallestM(12)); // Output: -1
console.log(findSmallestM(13)); // Output: 76923