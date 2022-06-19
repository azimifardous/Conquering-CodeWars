// Count the number of divisors of a positive integer n.

const countDivisors = n => {
    let count = 0;
    for (let i = 0; i <= n; i++)
        if (n % i === 0) count++;

    return count
};

console.log(countDivisors(4));