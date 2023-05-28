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

let mobileIcon = document.querySelector('#mobile-icon');


mobileIcon.addEventListener('click', () => {
    if (mobileIcon.classList.contains('act')) {
        mobileIcon.classList.remove('act');
    } else {
        mobileIcon.classList.add('act');
    }
})

const lazyLoad = () => {
    let images = document.querySelectorAll('.image-block img');
    images.forEach(img => {
        let src = img.dataset.src;
        if (src) {
            img.src = src;
        }
    });
}


setTimeout(() => {
    lazyLoad();
}, 5000)