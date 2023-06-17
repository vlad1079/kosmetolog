let position = 0;
let slidesToShow;

if (window.outerWidth > 321) {
    slidesToShow = 3.3236;
} else {
    slidesToShow = 2;
}

const slidesToScroll = 1;
const container = document.querySelector('.main_slider_action');
const track = document.querySelector('.main_slider_blocks');
const btnPrev = document.querySelector('.prevB');
const btnNext = document.querySelector('.nextB');
const items = document.querySelectorAll('.main_slider_blocks_card');
const itemsCont = items.length;
const itemsWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemsWidth;
const mainSlider = document.getElementById('main_slider_blocks');


console.log(slidesToShow);
console.log(window.outerWidth);

items.forEach((item) => {
    item.style.minWidth = `${itemsWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemLeft = itemsCont - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemsWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemsWidth;
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemsWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCont - slidesToShow) * itemsWidth;
};

checkBtns();


let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
    if (touchendX < touchstartX)
    btnPrev.click();
    if (touchendX > touchstartX)
    btnNext.click();
}


track.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', (e) => {
    touchendX <= e.changedTouches[0].screenX;
    checkDirection();
});
console.log(touchstartX);
console.log(touchendX);
