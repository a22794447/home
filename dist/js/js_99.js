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


