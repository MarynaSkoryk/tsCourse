// 1
let age: number;
age = 50;
let name: string;
name = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number) => number;
callback = (a) => {
  return 100 + a;
};

// 2
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// 3
let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
}

// 4
let person: [string, number];
person = ['Max', 21];

// 5
enum Load {
  LOADING,
  READY,
}
const page = {
  load: Load.READY,
};
if (page.load === Load.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
  console.log('Сторінка завантажена');
}

// 6
let union: string | number;

// 7
let literal: 'enable' | 'disable';

// 8
function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError(): never {
  throw new Error('Error');
}

// 9
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
