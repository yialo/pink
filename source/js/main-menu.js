var header = document.querySelector('.page-header');
var menu = document.querySelector('.page-header__navigation');
var menuOpen = document.querySelector('.page-header__button--open');
var menuClose = document.querySelector('.page-header__button--close');
var intro = document.querySelector('.intro');

header.classList.remove('page-header--nojs');
menu.classList.add('page-header__navigation--closed');
intro.classList.remove('intro--nojs');

menuOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.remove('page-header__navigation--closed');
  menu.classList.add('page-header__navigation--opened');
  menuClose.focus();
});

menuClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.add('page-header__navigation--closed');
  menu.classList.remove('page-header__navigation--opened');
  menuOpen.focus();
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (menu.classList.contains('page-header__navigation--opened')) {
      evt.preventDefault();
      menu.classList.add('page-header__navigation--closed');
      menu.classList.remove('page-header__navigation--opened');
      menuOpen.focus();
    }
  }
});
