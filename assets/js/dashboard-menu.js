$(document).ready(function() {
    // open menu
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


    // open menu on click on menu item
    $('.menu .menu__list .menu__item').on('click', function() {
        let isOpened = $('.burger-menu').attr('data-opened') === 'false';
        $(this).attr('data-opened', isOpened);
        if(isOpened) openMenu();
    });

    function openMenu () {
        $('body').removeClass('menu-closed');
    }
    function closeMenu() {
        $('body').addClass('menu-closed');
    }
});
  