// EXAMPLE 1 - Replace the First Occurrence of a Character in a String in JS

const str = 'hello world';

const replaceFirst = str.replace(/l/, '_');
console.log(replaceFirst); // 👉️ he_lo world

const replaceAll = str.replace(/l/g, '_');
console.log(replaceAll); // 👉️ he__o wor_d

// ------------------------------------------------------------------

// // EXAMPLE 2 - In a case-insensitive manner

// const str = 'HELLO WORLD';

// const replaceFirst = str.replace(/l/i, '_');
// console.log(replaceFirst); // 👉️ HE_LO WORLD

// const replaceAll = str.replace(/l/gi, '_');
// console.log(replaceAll); // 👉️ HE__O WOR_D

// ------------------------------------------------------------------

// // EXAMPLE 3 - You can also pass a string to the `replace()` method

// const str = 'hello world';

// const replaceFirst = str.replace('l', '_');
// console.log(replaceFirst); // 👉️ he_lo world
