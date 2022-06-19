function alternate(n, firstValue, secondValue) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return arr
}

console.log(alternate(4, true, false))