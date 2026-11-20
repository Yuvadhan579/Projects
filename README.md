# NumFacts

A simple command-line tool that performs number-related operations.

## Features

### Single Number Input

When a single number is provided, the program:

- Counts the number of digits
- Calculates the sum of digits
- Finds all divisors
- Checks whether the number is prime

Example:

```bash
python numfacts.py 360
```

Output:

```text
Digit Count: 3
Digit Sum: 9
Divisors: [1, 2, 3, 4, 5, 6, ...]
Prime: False
```

---

### Two Number Input

When two numbers are provided, the program:

- Finds the GCD (Greatest Common Divisor)
- Finds the LCM (Least Common Multiple)

Example:

```bash
python numfacts.py 84 36
```

Output:

```text
GCD: 12
LCM: 252
```

---

## Functions Used

### digit_count()

Counts the digits in a number.

**Time Complexity:** O(n)

### digit_sum()

Calculates the sum of all digits.

**Time Complexity:** O(n)

### divisors()

Finds all divisors of a number.

**Time Complexity:** O(n)

### is_prime()

Checks whether a number is prime.

**Time Complexity:** O(√n)

### gcd()

Uses Euclid's Algorithm to find the Greatest Common Divisor.

**Time Complexity:** O(log n)

### lcm()
