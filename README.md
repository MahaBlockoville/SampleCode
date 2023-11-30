# SampleCode



# Mid level
Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
The application should be performant at scale to handle larger numbers without slowing down exponentially.


 const memo = new Map();

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    if (memo.has(n)) {
        return memo.get(n);
    }

    const result = fibonacci(n - 1) + fibonacci(n - 2);
    memo.set(n, result);

    return result;
}

// Example usage
const position = 10; // Change this to the desired position in the Fibonacci series
const result = fibonacci(position);
console.log(`Fibonacci value at position ${position}: ${result}`);

# Description
In this example, the fibonacci function uses recursion but avoids redundant calculations by checking the memo Map. If the result for a particular position n is already stored in memo, it directly returns the result, otherwise, it calculates the result, stores it in memo, and then returns the result.

This approach significantly improves the performance, especially for larger values of n. You can change the position variable to test the function with different positions in the Fibonacci series.


# Senior/Mid level
A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.Examples:
1. Given S = "cabbacc", the function should return ["abba"] because it is the longest balanced substring.
2. Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings.
3. Given S = "aaaaaaa", the function should return [] since S does not contain a balanced substring.Write an efficient algorithm for the following assumptions:
 - N is an integer within the range [1..100,000];
 - string S is made only of lowercase letters (a−z).


function isBalanced(substring) {
    const charCount = new Map();

    for (const char of substring) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    const values = [...charCount.values()];
    return charCount.size === 2 && values[0] === values[1];
}

function getBalancedSubstrings(S) {
    let longestBalancedSubstrings = [];
    const n = S.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 2; j <= n; j++) {
            const substring = S.slice(i, j);
            if (isBalanced(substring)) {
                if (
                    longestBalancedSubstrings.length === 0 ||
                    substring.length > longestBalancedSubstrings[0].length
                ) {
                    longestBalancedSubstrings = [substring];
                } else if (substring.length === longestBalancedSubstrings[0].length) {
                    longestBalancedSubstrings.push(substring);
                }
            }
        }
    }

    return longestBalancedSubstrings;
}

// Examples
console.log(getBalancedSubstrings("cabbacc"));  // Output: ['abba']
console.log(getBalancedSubstrings("abababa"));  // Output: ['ababab', 'bababa']
console.log(getBalancedSubstrings("aaaaaaa"));  // Output: []



# Description
This Node.js code defines two functions, isBalanced to check if a substring is balanced, and getBalancedSubstrings to find the longest balanced substrings in the input string S.
 

# Senior level
You're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.
At the end of the solution, all Rings should be sorted on Place B just as it was on Plate A.Examples:
1. Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which corresponds to the movements of each Ring on each Plate.
2. Given N = 3, the function should return ["1: A to B", "2: A to C", "1: B to C", "3: A to B", "1: C to A", "2: C to B", "1: A to B"]
3. Given N = 1, the function should return ["1: A to B"]Write an algorithm that assumes the following conditions:
 - Only one Ring can be moved at a time
 - A larger Ring cannot be placed on top of a smaller Ring. Example, Ring 4 can only be placed on Ring 5+ and not on any of Ring 3-
 - Ring diameter cannot be negative

function migrateRings(N, A, B, C) {
    const steps = [];

    function hanoi(n, source, target, auxiliary) {
        if (n === 1) {
            steps.push(`${n}: ${source} to ${target}`);
        } else {
            hanoi(n - 1, source, auxiliary, target);
            steps.push(`${n}: ${source} to ${target}`);
            hanoi(n - 1, auxiliary, target, source);
        }
    }

    if (N > 0) {
        hanoi(N, A, B, C);
    }

    return steps;
}

// Examples
console.log(migrateRings(2, 'A', 'B', 'C'));
console.log(migrateRings(3, 'A', 'B', 'C'));
console.log(migrateRings(1, 'A', 'B', 'C'));


# Description

This code defines a function migrateRings that uses the Tower of Hanoi algorithm to move rings from plate A to plate B with the help of plate C. The hanoi function is a recursive helper function that performs the actual movements.

You can change the values of N, 'A', 'B', and 'C' in the example calls to test the function with different scenarios.
