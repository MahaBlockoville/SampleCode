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
