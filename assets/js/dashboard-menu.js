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
        $('body').removeClass('menu-closed');
    }
    function closeMenu() {
        $('body').addClass('menu-closed');
    }
});
  