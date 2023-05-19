let age=18;
let firstName='Xuerou';
let lastName='ars';
let country='tw';

console.log('(' + country + ') ' + firstName + ' ' + lastName)
console.log(`(${country}) ${firstName} ${lastName}`)

// 數字四則運算
let num1 = 1;
let num2 = 1.2;
let num3 = num1 + num2;
let num4 = '10'
let num5 = num4 + num1;
let num6 = num1 + num4;
let num7 = num1 - num4;
let num8 = num1 * num4;
let num9 = num1 / num4;
let num10 = num1 % num4;
let num11 = num1 + 'a';
console.log(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);

// 字串轉換數字 parseInt(字串, 10進制) 12 13是同樣的的算法
let num12 = parseInt(num1, 10) + parseInt(num4, 10);
let num13 = +num1 + +num4;
let num14 = +num1 + +'a';
console.log(num12, num13, num14);

// 數字轉換字串
console.log(num1, num1.toString(), typeof num1, typeof num1.toString());

// 布林, b4 b6 為假的
let b1 = true;
let b2 = false;
let b3 = 1;
let b4 = 0;
let b5 = 's';
let b6 = '';
let b7 = -1;
let b8 = 2;

if (b1) {
    console.log('Yes');
} else {
    console.log('No');
}