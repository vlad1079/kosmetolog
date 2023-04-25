const iconMenu = document.querySelector('.header_bottom_menu_icon');
if (iconMenu) {
    const iconBody = document.querySelector('.header_container');

    const logo = document.querySelector('.header_top_logo');
    const headerContainerTop = document.querySelector('.header_container_top');
    iconMenu.addEventListener('click' , function  (e) {
        iconMenu.classList.toggle('active');
        iconBody.classList.toggle('active');
        logo.classList.toggle('active');
        headerContainerTop.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
}

new Swiper('.header_bottom_slider' ,{
    slidesPerView: 2,
    spaceBetween: 19,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});