const toLevel = (number) => {
    // >= 90 甲
    if (number >= 90) {
        return '甲';
    }
    // >= 80 乙
    if (number >= 80) {
        return '乙';
    }
    // >= 70 丙
    if (number >= 70) {
        return '丙';
    }
    // >= 60 丁
    if (number >= 60) {
        return '丁';
    }
    // < 60 不及格
    return '不及格';
}

const calcLevel = () => {
    let number = document.querySelector('#number');
    if (!number) {
        alert('沒有輸入框');
        return;
    }

    if (!number.value) {
        alert('請輸入分數');
        return;
    }

    let response = document.querySelector('#response');
    // 修正為等級計算
    response.innerHTML = `你的等級為: ${toLevel(number.value)}`;
    number.value = '';
    number.focus();
}

let level = document.querySelector('#level');

level.addEventListener('click', calcLevel);

let number = document.querySelector('#number');

number.addEventListener('change', () => {
    if (!number.value) {
        alert('請輸入分數');
        number.focus();
    }
})

// name.addEventListener('blur', () => {
//     console.log(`blur: ${name.value}`);
// })

// name.addEventListener('keypress', () => {
//     console.log(`keypress: ${name.value}`);
// })

// name.addEventListener('keyup', () => {
//     console.log(`keypress: ${name.value}`);
// })

number.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        calcLevel();
    }
})