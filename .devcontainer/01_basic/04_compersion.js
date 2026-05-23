console.log( null > true);
console.log(null < 0);
console.log(null >=0);
console.log(null <=0);
console.log(null != 0);

console.log(undefined > 0);
console.log(undefined > 0);

// hy these are true in JavaScript
// null >= 0 and null <= 0
// Both use JavaScript’s relational comparison rules.

// null is converted to number 0
// So:
// null >= 0 becomes 0 >= 0 → true
// null <= 0 becomes 0 <= 0 → true
// In the spec:

// a >= b is effectively !(a < b)
// a <= b is effectively !(b < a)
// So with null → 0, both comparisons compare 0 to 0, which is true.

// null != 0
// This is a loose inequality (!=), which uses JavaScript’s abstract equality rules.

// null is only equal to undefined
// null == 0 is false
// therefore null != 0 is true
// Key point
// null behaves differently under:

// relational comparison (<, <=, >, >=) — converts to number 0
// equality comparison (==, !=) — null only equals undefined
// So:

// null >= 0 → true
// null <= 0 → true
// null != 0 → true
// If you want, I can also explain why null > 0 and null < 0 are both false.

// Raptor mini (Preview) • 1x

// Comparing null with boolean values in JavaScript
// What happens internally
// When JavaScript compares null with a boolean using:

// relational operators (<, <=, >, >=)
// loose equality operators (==, !=)
// it generally converts values to numbers first:

// null → 0
// true → 1
// false → 0
// Relational comparisons
// So:

// null >= false → 0 >= 0 → true
// null <= false → 0 <= 0 → true
// null > false → 0 > 0 → false
// null < false → 0 < 0 → false
// null >= true → 0 >= 1 → false
// null < true → 0 < 1 → true
// Loose equality
// But for == and !=, null is special:

// null == undefined → true
// null == false → false
// null == true → false
// null != false → true
// null != true → true
// Key point
// null is only loosely equal to undefined, not to false or true.
// So even though numeric comparison treats null like 0, equality comparison does not.

// If you want, I can also show exact outputs for null === false and null === undefined.

// Comparing null with a number
// Relational operators (<, <=, >, >=)
// When JavaScript compares null with a number, it converts null to 0.

// So:

// null > 0 → 0 > 0 → false
// null < 0 → 0 < 0 → false
// null >= 0 → 0 >= 0 → true
// null <= 0 → 0 <= 0 → true
// Loose equality (==, !=)
// For equality, null is special:

// null == 0 → false
// null != 0 → true
// Strict equality (===, !==)
// No type conversion happens:

// null === 0 → false
// null !== 0 → true
// Summary
// null is treated like 0 in numeric comparisons.
// But in loose equality, null is only equal to undefined, not to 0.
