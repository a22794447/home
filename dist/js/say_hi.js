const sayHI = () => {
    let name = document.querySelector('#name');
    if (!name) {
        alert('沒有輸入框');
        return;
    }

    if (!name.value) {
        alert('請輸入名字');
        return;
    }

    let response = document.querySelector('#response');
    response.innerHTML = `HI!,${name.value}`;
    name.value = '';
    name.focus();
}

let hi = document.querySelector('#hi');

hi.addEventListener('click', sayHI);

let name = document.querySelector('#name');

name.addEventListener('change', () => {
    if (!name.value) {
        alert('請輸入名字');
        name.focus();
    }
})

name.addEventListener('blur', () => {
    console.log(`blur: ${name.value}`);
})