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

// 字元 char ,強型態語言時,一次只能塞一個
let s1 = 'S1 \t S1';
// 字串 string 
let s2 = "S2 \t S2";

// escape \
// \n -> new line--換行
// \r\n -> new line--換行pc版本
// \t -> tab

console.log(s1);
console.log(s2);

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

// 陣列 [] ,排序編號會從0開始
let numb = [1, 2, 3, 4];
console.log(numb);

// 增加
numb.push(5);
console.log(numb);

// 尋找排序第4的是哪個
console.log(numb[4]);

// 轉字串, 展開並用::做區隔(區隔的符號可以改)
console.log(numb.join('::'));

// 尋找()裡的排序是幾號
let numb2 = numb.indexOf(3);
console.log(numb2);

// 刪除, (排序2開始刪除2個)
numb.splice(2,2);
console.log(numb);

// 迴圈
let nums = [40, 50, 80, 75];

// 變數.forEach(值, 排序)
console.log('調整前')
nums.forEach((ara, shi) => {
    console.log(`第 ${shi + 1} 位同學: ${ara}`);
    nums[shi] = ara + 20;
})

console.log('調整後')
nums.forEach((ara, shi) => {
    console.log(`第 ${shi + 1} 位同學: ${ara}`);
})

// 製作100個成績
let nums100 = [];
for (let aaa = 0; aaa < 100; aaa++) {
    nums100[aaa] = Math.ceil(Math.random() * 100);
}
console.table(nums100);

// 宣告
const a1 = function () {
    console.log('Origin function');
}

const a2 = () => {
    console.log('Arror function');
}

nums.forEach(function (ara, shi) {
    console.log(`第 ${shi + 1} 位同學: ${ara}`);
})

// 具名函數不一定要add
const addars = function (ara, shi) {
    console.log(`具名函數--第 ${shi + 1} 位同學: ${ara}`);
} 

// 呼叫
nums.forEach(addars)