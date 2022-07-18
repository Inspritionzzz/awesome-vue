// 去除eslint报错
/*eslint-disable */

/**
 * 3.1 Number:Integer/Floating-Point/Arithmetic/Dates and Times
 *
 */
0
3
10000000
0xff       // => 255: (15*16 + 15)
0xBADCAFE  // => 195939070
0b10101  // => 21:  (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377    // => 255: (3*64 + 7*8 + 7*1)

// [digits][.digits][(E|e)[(+|-)]digits]
3.14
2345.6789
.333333333333333333
6.02e23        // 6.02 × 10²³
1.4738223E-32  // 1.4738223 × 10⁻³²

let billion = 1_000_000_000;   // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF;     // As a bytes separator.
let bits = 0b0001_1101_0111;   // As a nibble separator.
let fraction = 0.123_456_789;  // Works in the fractional part, too.

// 基本运算符: + - * / % **
Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)           // => 1.0: round to the nearest integer
Math.ceil(.6)            // => 1.0: round up to an integer
Math.floor(.6)           // => 0.0: round down to an integer
Math.abs(-5)             // => 5: absolute value
Math.max(1,2,3)          // Return the largest argument
Math.min(1,2,3)          // Return the smallest argument
Math.random()            // Pseudo-random number x where 0 <= x < 1.0
Math.PI                  // π: circumference of a circle / diameter
Math.E                   // e: The base of the natural logarithm
Math.sqrt(3)             // => 3**0.5: the square root of 3
Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
Math.sin(0)              // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)             // Natural logarithm of 10
Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed

// ES6
let x = 3;
Math.cbrt(27)    // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100)  // => 2: Base-10 logarithm
Math.log2(1024)  // => 10: Base-2 logarithm
Math.log1p(x)    // Natural log of (1+x); accurate for very small x
Math.expm1(x)    // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x)     // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)   // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)  // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)  // => 3: convert to an integer by truncating fractional part
Math.fround(x)   // Round to nearest 32-bit float number
Math.sinh(x)     // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x)    // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()


Infinity                    // A positive number too big to represent
Number.POSITIVE_INFINITY    // Same value
1/0                         // => Infinity
Number.MAX_VALUE * 2        // => Infinity; overflow
-Infinity                   // A negative number too big to represent
Number.NEGATIVE_INFINITY    // The same value
-1/0                        // => -Infinity
-Number.MAX_VALUE * 2       // => -Infinity
NaN                         // The not-a-number value
Number.NaN                  // The same value, written another way
0/0                         // => NaN
Infinity/Infinity           // => NaN
Number.MIN_VALUE/2          // => 0: underflow
-Number.MIN_VALUE/2         // => -0: negative zero
-1/Infinity                 // -> -0: also negative 0
-0

// The following Number properties are defined in ES6
Number.parseInt()       // Same as the global parseInt() function
Number.parseFloat()     // Same as the global parseFloat() function
Number.isNaN(x)         // Is x the NaN value?
Number.isFinite(x)      // Is x a number and finite?
Number.isInteger(x)     // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON          // => 2**-52: smallest difference between numbers

// 判断数值型变量是否为空不能用 x === NaN
x != x;
Number.isNaN(x)

let zero = 0;         // Regular zero
let negz = -0;        // Negative zero
zero === negz         // => true: zero and negative zero are equal
1/zero === 1/negz     // => false: Infinity and -Infinity are not equal

// js不能精确的表示数字
let x1 = .3 - .2;    // thirty cents minus 20 cents
let y1 = .2 - .1;    // twenty cents minus 10 cents
x1 === y1             // => false: the two values are not the same!
x1 === .1            // => false: .3-.2 is not equal to .1
y1 === .1            // => true: .2-.1 is equal to .1

// BigInt：不能将 BigInt 类型的操作数与常规的数字操作数混合使用。
1234n                // A not-so-big BigInt literal
0b111111n            // A binary BigInt
0o7777n              // An octal BigInt
0x8000000000000000n  // => 2n**63n: A 64-bit integer

BigInt(Number.MAX_SAFE_INTEGER)     // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string)                      // => 10n**100n: one googol

1000n + 2000n  // => 3000n
3000n - 2000n  // => 1000n
2000n * 3000n  // => 6000000n
3000n / 997n   // => 3n: the quotient is 3
3000n % 997n;   // => 9n: and the remainder is 9
(2n ** 131071n) - 1n  // A Mersenne prime with 39457 decimal digits

// 比较运算符适用于混合数值之间的比较,算数运算符不行！
1 < 2n     // => true
2 > 1n     // => true
0 == 0n    // => true
0 === 0n   // => false: the === checks for type equality as well

let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

/**
 * 3.2 Text: String/Pattern Matching
 */
let euro = "€";
let love = "❤";
euro.length   // => 1: this character has one 16-bit element
love.length   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

""  // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
console.log("τ is the ratio of a circle's circumference to its radius")
console.log(`"She said 'hi'", he said.`)

// A string representing 2 lines written on one line:
'two\nlines'
// A one-line string written on 3 lines:
"one\
 long\
 line"
// A two-line string written on two lines:
console.log(`the newline character at the end of this line
is included literally in this string`)

// 转义字符 \n 和转义序列 \'
'You\'re right, it can\'t be a quote'

let msg = "Hello, " + "world";   // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + msg;
greeting.length;

let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6
s[0]                  // => "h"
s[s.length-1]         // => "d"

// 模板字面量
let s2 = `hello world`;
let name = "Bill";
let greeting2 = `Hello ${ name }.`;  // greeting == "Hello Bill."

let filename = "filename";
let linenumber = "linenumber"
function myException() {
    this.message = "error message";
    this.message = "stack";
}
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${myException.message}
Stack trace:
${myException.stack}
`;
console.log("errorMessage: " + errorMessage);
`\n`.length            // => 1: the string has a single newline character
String.raw`\n`.length;  // => 2: a backslash character and the letter n

/^HTML/;             // Match the letters H T M L at the start of a string
/[1-9][0-9]*/;       // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i;   // Match "javascript" as a word, case-insensitive

let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"
text.split(/\D+/)                // => ["","1","2","3"]: split on nondigits

/**
 * 3.3 布尔
 */
let a = 4;
let b = 3;
if (a === 4) {
    b = b + 1;
} else {
    a = a + 1;
}

// 以下会转换成false
undefined
null
0
-0
NaN
""  // the empty string

/**
 * 3.4 null and undefined
 */

console.log("null: " + typeof(null) + " " + "undefined: " + typeof(undefined));
console.log("null == undefined: " + null == undefined);
console.log("null === undefined: " + null === undefined);
/**
 * 3.5 Symbols
 */
let strname = "string name";      // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname                    // => "string": strname is a string
typeof symname                    // => "symbol": symname is a symbol
let o = {};                       // Create a new object
o[strname] = 1;                   // Define a property with a string name
o[symname] = 2;                   // Define a property with a Symbol name
o[strname]                        // => 1: access the string-named property
o[symname]                        // => 2: access the symbol-named property

let s3 = Symbol("sym_x");
s3.toString()             // => "Symbol(sym_x)"

let s4 = Symbol.for("shared");
let t4 = Symbol.for("shared");
s4 === t4          // => true
s4.toString()     // => "Symbol(shared)"
Symbol.keyFor(t4) // => "shared"
/**
 * 3.6 The Global Object
 */

/**
 * 3.7 Immutable Primitive Values and Mutable Object References
 */
let s5 = "hello";   // Start with some lowercase text
s5.toUpperCase();   // Returns "HELLO", but doesn't alter s
s5                  // => "hello": the original string has not changed

let o1 = { x: 1 };  // Start with an object
o1.x = 2;           // Mutate it by changing the value of a property
o1.y = 3;           // Mutate it again by adding a new property

let a1 = [1,2,3];   // Arrays are also mutable
a1[0] = 0;          // Change the value of an array element
a1[3] = 4;          // Add a new array element

let o2 = {x: 1}, p = {x: 1};  // Two objects with the same properties
o2 === p                      // => false: distinct objects are never equal
let a2 = [], b2 = [];          // Two distinct, empty arrays
a2 === b2                      // => false: distinct arrays are never equal

let a3 = [];   // The variable a refers to an empty array.
let b3 = a3;    // Now b refers to the same array.
b3[0] = 1;     // Mutate the array referred to by variable b.
a3[0]          // => 1: the change is also visible through variable a.
a3 === b3       // => true: a and b refer to the same object, so they are equal.

let a4 = ["a","b","c"];              // An array we want to copy
let b4 = [];                         // A distinct array we'll copy into
for(let i = 0; i < a4.length; i++) { // For each index of a[]
    b4[i] = a4[i];                    // Copy an element of a into b
}
let c4 = Array.from(b4);              // In ES6, copy arrays with Array.from()

function equalArrays(a4, b4) {
    if (a4 === b4) return true;                // Identical arrays are equal
    if (a4.length !== b4.length) return false; // Different-size arrays not equal
    for(let i = 0; i < a4.length; i++) {      // Loop through all elements
        if (a4[i] !== b4[i]) return false;     // If any differ, arrays not equal
    }
    return true;                             // Otherwise they are equal
}
/**
 * 3.8 Type Conversions
 */
10 + " objects"     // => "10 objects":  Number 10 converts to a string
"7" * "4"           // => 28: both strings convert to numbers
let n = 1 - "x";    // n == NaN; string "x" can't convert to a number
n + " objects"      // => "NaN objects": NaN converts to string "NaN"


/**
 * 3.9 Variable Declaration and Assignment
 */