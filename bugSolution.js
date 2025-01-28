function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar('2', 3)); // throws error