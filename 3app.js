
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');

openbtn.addEventListener('mouseover', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.add('visible');
    }
})

closebtn.addEventListener('mouseover', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.remove('visible');
    }
})