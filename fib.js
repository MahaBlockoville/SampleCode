const memo = new Map();
function fibonacci(n) {
if (n <= 1) { return n; }
if (memo.has(n)) {
    return memo.get(n);
}
const result = fibonacci(n - 1) + fibonacci(n - 2);
memo.set(n, result);
return result;
}
const position = 10; 
// Change this to the desired position in the Fibonacci series 
const result = fibonacci(position);
console.log(Fibonacci value at position ${position}: ${result});
