// 1
var age;
age = 50;
var name;
name = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) {
    return 100 + a;
};
// 2
var anything;
anything = -20;
anything = 'Text';
anything = {};
// 3
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// 4
var person;
person = ['Max', 21];
// 5
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
var page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
    console.log('Сторінка завантажена');
}
// 6
var union;
// 7
var literal;
// 8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
