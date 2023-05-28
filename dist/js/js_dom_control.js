let uid = document.querySelector('#uid');

let doing = document.querySelector('#doing');

doing.addEventListener('click', () => {
    uid.style.color = 'green';
    uid.style.fontSize = '50px';
    uid.style.backgroundColor = 'black';
})

let addClass = document.querySelector('#add-class');

addClass.addEventListener('click', () => {
    uid.classList.add('active');
})

let removeClass = document.querySelector('#remove-class');

removeClass.addEventListener('click', () => {
    uid.classList.remove('active');
})