function reduce(fraction) {
    let temp = fraction[0] - 1;

    if (fraction[0] < fraction[1]) {
        for (let i = fraction[0]; i > 2; i--) {
            if (fraction[0] % i === 0 && fraction[1] % i === 0) {
                fraction[0] = fraction[0] / i;
                fraction[1] = fraction[1] / i;
            }
        }
    }
    else
    {
        for (let i = fraction[1]; i > 1; i--) {
            if (fraction[1] % i === 0 && fraction[0] % i === 0) {
                fraction[0] = fraction[0] / i;
                fraction[1] = fraction[1] / i;
            }
        }
    }

    return fraction
}

console.log(reduce([4, 2]))
