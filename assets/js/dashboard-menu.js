$(document).ready(function() {
    $('.burger-menu').on('click', function() {
        let isOpened = $(this).attr('data-opened') === 'false';
        $(this).attr('data-opened', isOpened);
        if(isOpened) {
            openMenu();
        } else {
            closeMenu();
        }
    });
    $('.menu .close').on('click', function() {
        closeMenu();
    });

    function openMenu () {
        $('.menu').removeClass('menu-closed');
        $('.burger-menu').removeClass('burger-closed');
    }
    function closeMenu() {
        $('.menu').addClass('menu-closed');
        $('.burger-menu').addClass('burger-closed');
    }
});
  