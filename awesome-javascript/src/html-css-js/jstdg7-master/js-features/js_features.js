// 装载模块,装载模块时会检查语法的错误信息
require('../ch01/js_fundamental')
// 使用node命令进行模块加载
// node ./js_fundamental.resources
var str01 = "just a test";
console.log(typeof str01);
console.log(typeof(str01));
console.log(typeof "test");


var str02 = "abcde";
var obj02 = new String(str02);
function newToString() {
    return "test test";
}
function func(val) {
    val.toString = newToString;
}
// 传入值
func(str02);
console.log(str02);
// 传入引用
func(obj02);
console.log(String(obj02));


var n = 3;
var str = new Array(n + 1).join('abc');
console.log(str);


