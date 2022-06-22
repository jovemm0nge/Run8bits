const mario = document.querySelector('.mario-hero');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);