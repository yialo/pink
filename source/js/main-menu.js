var menu = document.querySelector('.page-header__list');
var firstMenuItem = document.querySelector('.page-header__logo-wrapper');
var menuOpen = document.querySelector('.page-header__button--open');
var menuClose = document.querySelector('.page-header__button--close');

menuOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.toggle('hidden');
  firstMenuItem.classList.toggle('menu-visible-style');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});

menuClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  menu.classList.toggle('hidden');
  firstMenuItem.classList.toggle('menu-visible-style');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});
