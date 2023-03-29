const iconMenu = document.querySelector('.header_bottom_menu_icon');
if (iconMenu) {
    const iconBody = document.querySelector('.header_container');

    const logo = document.querySelector('.header_top_logo');
    iconMenu.addEventListener('click' , function  (e) {
        iconMenu.classList.toggle('active');
        iconBody.classList.toggle('active');
        logo.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
}