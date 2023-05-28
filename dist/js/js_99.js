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

    // console.log(n1, n2);
    // console.log(n1.value, n2.value);

    if (!n1) {
        return
    }

    if (n1.value <=0) {
        return
    }

    if (!n2) {
        return
    }

    if (n2.value <= 0) {
        return
    }

    let thead = [];
    thead.push(' ');

    // console.log('I can!');
    // 運算
    let result = {};
    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        result[i] = [];
        for (let j = 1; j <= n2.value; j++) {
            result[i].push(i * j);
        }
    }

    let table = document.querySelector('#table');
    let thtadTr = document.querySelector('thead tr')
    
    thtadTr.innerHTML = ' ';
    thead.forEach((x, xindex) => {
        thtadTr.innerHTML += `<th>${x}</th>`
        // 上下方為同樣的算法，上方是簡化的樣子
        // thtadTr.innerHTML = thtadTr.innerHTML + `<th>${x}</th>`
    })

    let tbody = table.querySelector('tbody');
    let tbodyTr = '';
    tbody.innerHTML = '';

    for (let row in result) {
        tbodyTr = `<tr><td>${row}</td>`;
        let columns = result[row];
        columns.forEach(value => {
            tbodyTr += `<td>${value}</td>`;
        })

        tbodyTr += '</tr>';
        tbody.innerHTML += tbodyTr;
    }
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);