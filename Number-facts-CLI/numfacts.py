import sys
import math
import time


def digit_count(n):
    return len(str(abs(n)))


def digit_sum(n):
    return sum(int(d) for d in str(abs(n)))


def divisors(n):
    result = []
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            result.append(i)
            if i != n // i:
                result.append(n // i)
    return sorted(result)


def is_prime(n):
    if n < 2:
        return False

    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True


def gcd(a, b):
    while b:
        a, b = b, a % b
    return abs(a)


def lcm(a, b):
    return abs(a * b) // gcd(a, b)


def sieve(start, end):
    prime = [True] * (end + 1)

    if end >= 0:
        prime[0] = False
    if end >= 1:
        prime[1] = False

    p = 2
    while p * p <= end:
        if prime[p]:
            for i in range(p * p, end + 1, p):
                prime[i] = False
        p += 1

    return [i for i in range(max(2, start), end + 1) if prime[i]]


args = sys.argv[1:]

if args and args[0] == "--range":
    start = int(args[1])
    end = int(args[2])

    t1 = time.perf_counter()
    primes = sieve(start, end)
    t2 = time.perf_counter()

    print(f"Primes from {start} to {end}:")
    print(*primes)
    print(f"Time: {(t2 - t1) * 1000:.3f} ms")

elif len(args) == 1:
    n = int(args[0])

    print(f"Number: {n}")
    print(f"Digit Count: {digit_count(n)}")
    print(f"Digit Sum: {digit_sum(n)}")
    print(f"Divisors: {divisors(n)}")
    print(f"Is Prime: {is_prime(n)}")

elif len(args) == 2:
    a = int(args[0])
    b = int(args[1])

    print(f"Number A: {a}")
    print(f"Number B: {b}")
    print(f"GCD: {gcd(a, b)}")
    print(f"LCM: {lcm(a, b)}")

else:
    print("Usage:")
    print("  python numfacts.py 360")
    print("  python numfacts.py 84 36")
    print("  python numfacts.py --range 1 100")