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
    // 數字1 的 DOM
    let n1 = document.querySelector('#n1');
    // 數字2 的 DOM
    let n2 = document.querySelector('#n2');

    // console.log(n1, n2);
    // console.log(n1.value, n2.value);

    // 如果沒有數字1
    if (!n1) {
        // BYE
        return
    }

    // 如果數字1 小於等於 0
    if (n1.value <=0) {
        // BYE
        return
    }

    // 如果沒有數字2
    if (!n2) {
        // BYE
        return
    }

    // 如果數字2 小於等於 0
    if (n2.value <= 0) {
        // BYE
        return
    }

    // 抓取 table 的 DOM
    let table = document.querySelector('#table');
    let thtad = document.querySelector('thead')
    let tbody = table.querySelector('tbody');

    // 初始化 thead UI
    thtad.innerHTML = '';
    tbody.innerHTML = '';

    // HTML 內容初始化
    let theadHTML = '<tr><th></th>';

    // 將 n1 的值跑 for loop(迴圈知道上限的喔) 產生 thead
    // 填入 thead 資料
    for (let i = 1; i <= n1.value; i++) {
        theadHTML += `<th>${i}</th>`;
    }

    // 關閉 thead
    theadHTML += '</tr>';
    // 更新 thead 內容
    thtad.innerHTML = theadHTML;

    // tbody UI 內容資料產生 1
    let result = {};
    for (let i = 1; i <= n2.value; i++) {
        result[i] = [];
        for (let j = 1; j <= n1.value; j++) {
            result[i].push(i * j);
        }
    }

    // 產生 UI 2
    let tbodyHTML = '';

    for (let row in result) {
        tbodyHTML = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyHTML += `<td>${value}</td>`;
        })

        tbodyHTML += '</tr>';
        tbody.innerHTML += tbodyHTML;
    }
    console.log(result)

    // console.log('I can!');
    // 運算
    // 迴圈，知道上限
    // let result = {};
        // 上下方為同樣的算法，上方是簡化的樣子
        // thtadTr.innerHTML = thtadTr.innerHTML + `<th>${x}</th>`
    // 迴圈，不知道上限設置
    
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);