$(document).ready(function () {

    var show = true;
    var countbox = ".js_number";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.js_number').css('opacity', '1');
            $('.js_number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});
// MEMBERSHIP
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);

function classToggleMem() {
    const navs = document.querySelectorAll('.m_c')

    navs.forEach(nav => nav.classList.toggle('m_c__ToggleShow'));
}
document.querySelector('.MemItems__ButtonTrigger')
    .addEventListener('click', classToggleMem);

function classToggleMem2() {
    const navs = document.querySelectorAll('.m_c2')

    navs.forEach(nav => nav.classList.toggle('m_c__ToggleShow_2'));
}
document.querySelector('.MemItems__ButtonTrigger_2')
    .addEventListener('click', classToggleMem2);

function classToggleMem3() {
    const navs = document.querySelectorAll('.m_c3')

    navs.forEach(nav => nav.classList.toggle('m_c__ToggleShow_3'));
}
document.querySelector('.MemItems__ButtonTrigger_3')
    .addEventListener('click', classToggleMem3);