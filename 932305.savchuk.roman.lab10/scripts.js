document.addEventListener('DOMContentLoaded', function () {
    const curtain = document.querySelector('.curtain');
    curtain.addEventListener('click', function () {
        curtain.classList.add('go_up');
        const lamp_box = document.querySelector('.lamp_box');
        lamp_box.classList.add('on');
    });
    const lamp_hang = document.querySelector('.lamp_hang_blocker');
    lamp_hang.addEventListener('mousedown', function () {
        lamp_hang.classList.add('go_down');
    });
    lamp_hang.addEventListener('mouseup', function () {
        lamp_hang.classList.remove('go_down');
    });
    lamp_hang.addEventListener('click', function () {
        setTimeout(() => {
            const light_box = document.querySelector('.light_wrapper');
            light_box.classList.toggle('on');
        }, 100);
    });
    const hat = document.querySelector('.hat');
    hat.addEventListener('click', function () {
        const animal = document.querySelector('.animal');
        const rabbit = document.querySelector('.rabbit');
        const bird = document.querySelector('.bird');
        animal.style.top = "95%";
        setTimeout(() => {
            rabbit.classList.toggle('on');
            bird.classList.toggle('on');
            animal.style.top = "80%";
        }, 500);
    });
});