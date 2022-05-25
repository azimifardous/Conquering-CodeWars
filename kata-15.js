let countSheep = num => {
    let sheep = ""
    for (let i = 1; i <= num; i++) {
        if (i === 0) {
            sheep = ""
        } else {
            sheep += `${i} sheep...`
        }
    }
    return sheep
};

console.log(countSheep(0));