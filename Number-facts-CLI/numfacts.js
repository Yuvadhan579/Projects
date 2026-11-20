const args = process.argv.slice(2);

function digitCount(n) {
    return Math.abs(n).toString().length;
}

function digitSum(n) {
    return Math.abs(n)
        .toString()
        .split("")
        .reduce((sum, d) => sum + Number(d), 0);
}

function divisors(n) {
    const result = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);

            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }

    return result.sort((a, b) => a - b);
}

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function sieve(start, end) {
    const prime = Array(end + 1).fill(true);

    if (end >= 0) prime[0] = false;
    if (end >= 1) prime[1] = false;

    for (let p = 2; p * p <= end; p++) {
        if (prime[p]) {
            for (let i = p * p; i <= end; i += p) {
                prime[i] = false;
            }
        }
    }

    const result = [];

    for (let i = Math.max(2, start); i <= end; i++) {
        if (prime[i]) result.push(i);
    }

    return result;
}

if (args[0] === "--range") {
    const start = Number(args[1]);
    const end = Number(args[2]);

    const t1 = performance.now();
    const primes = sieve(start, end);
    const t2 = performance.now();

    console.log(`Primes from ${start} to ${end}:`);
    console.log(primes.join(" "));
    console.log(`Time: ${(t2 - t1).toFixed(3)} ms`);
}
else if (args.length === 1) {
    const n = Number(args[0]);

    console.log(`Number: ${n}`);
    console.log(`Digit Count: ${digitCount(n)}`);
    console.log(`Digit Sum: ${digitSum(n)}`);
    console.log(`Divisors: ${JSON.stringify(divisors(n))}`);
    console.log(`Is Prime: ${isPrime(n)}`);
}
else if (args.length === 2) {
    const a = Number(args[0]);
    const b = Number(args[1]);

    console.log(`Number A: ${a}`);
    console.log(`Number B: ${b}`);
    console.log(`GCD: ${gcd(a, b)}`);
    console.log(`LCM: ${lcm(a, b)}`);
}
else {
    console.log("Usage:");
    console.log("  node numfacts.js 360");
    console.log("  node numfacts.js 84 36");
    console.log("  node numfacts.js --range 1 100");
}