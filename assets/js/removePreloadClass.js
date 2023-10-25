/**
 * src: https://css-tricks.com/transitions-only-after-page-load/
 * */
window.onload = function () {
 document.getElementsByTagName('body')[0].classList.remove('preload');
};