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
console.log(getBalancedSubstrings("cabbacc")); 
// Output: ['abba']
console.log(getBalancedSubstrings("abababa")); 
// Output: ['ababab', 'bababa'] 
console.log(getBalancedSubstrings("aaaaaaa")); 
// Output: []
