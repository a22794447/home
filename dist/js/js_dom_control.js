let uid = document.querySelector('#uid');

let doing = document.querySelector('#doing');

doing.addEventListener('click', () => {
    uid.style.color = 'green';
    uid.style.fontSize = '50px';
    uid.style.backgroundColor = 'black';
})