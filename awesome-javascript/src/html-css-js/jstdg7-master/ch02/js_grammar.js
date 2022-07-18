// 去除eslint报错
/*eslint-disable */
/**
 * 1. 注释
 */
// This is a single-line comment.

/* This is also a comment */  // and here is another comment.

/*
 * This is a multi-line comment. The extra * characters at the start of
 * each line are not a required part of the syntax; they just look cool!
 */

/**
 * 2. 字面量
 */
12               // The number twelve
1.2              // The number one point two
"hello world"    // A string of text
'Hi'             // Another string
true             // A Boolean value
false            // The other Boolean value
null             // Absence of an object

/**
 * 3。标识符只是一个名称。用于命名常量、变量、属性、函数和类，并为 JavaScript 代码中的某些循环提供标签。
   3.1 以下都是合法的:
         i
         my_variable_name
         v13
         _dummy
         $str
   3.2 保留字:
         as      const      export     get         null     target   void
         async   continue   extends    if          of       this     while
         await   debugger   false      import      return   throw    with
         break   default    finally    in          set      true     yield
         case    delete     for        instanceof  static   try
         catch   do         from       let         super    typeof
         class   else       function   new         switch   var
    3.3 这些将来可能会成为保留字:
        enum  implements  interface  package  private  protected  public
 */
/**
 * 4. 为了便于移植和编辑，通常在标识符中只使用 ASCII 字母和数字。
 *    但这只是一种编程约定，该语言允许在标识符中使用 Unicode 字母、数字和表意文字（但不允许使用表情符号）。
 *    这意味着程序员可以使用来自非英语语言的数学符号和单词作为常量和变量。
 */
const π = 3.14;
const sí = true;

let café = 1; // Define a variable using a Unicode character
caf\u00e9     // => 1; access the variable using an escape sequence
caf\u{E9}     // => 1; another form of the same escape sequence

console.log("\u{1F600}");  // Prints a smiley face emoji

// 同一字符有着不同的编码,使程序混乱;
// const café = 1;  // This constant is named "caf\u{e9}"
const café = 2;  // This constant is different: "cafe\u{301}"
café  // => 1: this constant has one value
café  // => 2: this indistinguishable constant has a different value
/**
 * 5. 分号和换行
 */
a = 3;
b = 4;
// 不能省略';'
a = 3; b = 4;

let a
a
    =
    3
console.log(a)
// 对于上面的语句,解释成下面的语句:
// let a; a = 3; console.log(a);
let y = x + f
(a+b).toString()
// 对于上面的语句,解释成下面的语句:
// let y = x + f(a+b).toString();

// 通常，如果一个语句以 (、[、/、+ 或 - 开头，那么它有可能被解释为之前语句的延续,这里开头使用防御分号;
let x = 0                         // Semicolon omitted here
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this statement separate

/*
return
true;
对于上面的语句,解释成下面的语句: return; true;  但是开发人员的意思可能是return true;
因此不能在 return、break 或 continue 和关键字后面的表达式之间插入换行符。
*/