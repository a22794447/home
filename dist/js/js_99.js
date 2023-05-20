// alert(123)

// 抓取
// 單一
let main = document.querySelector('#main')
console.log(main)

// 控制內容 (後加載)
// main.innerHTML = 'Super man!'

let lis = document.querySelector('#menu li')
console.log(lis)

// 多選
let liall = document.querySelectorAll('#menu li')
console.log(liall)

// 數值
let num1 = document.querySelector('#num-1');
// num1.value = 'abc';
// 事件綁定
let tchBtn = document.querySelector('#tch-btn');
tchBtn.addEventListener('click', () => {
    num1.value = 'ABC';
});

// 99乘法
// 步驟0；綁定事件

const genTable = () => {
    // console.log('123');
    // 步驟1、2：抓取n1、n2
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');

    console.log(n1, n2);
    console.log(n1.value, n2.value);
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);