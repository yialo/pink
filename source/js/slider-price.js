var priceButton_1 = document.querySelector('.price__toggle--1');
var priceButton_2 = document.querySelector('.price__toggle--2');
var priceButton_3 = document.querySelector('.price__toggle--3');
var priceTable = document.querySelector('.price__table');

priceButton_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.add('show-price-item-1');
  priceTable.classList.remove('show-price-item-2');
  priceTable.classList.remove('show-price-item-3');
});

priceButton_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.remove('show-price-item-1');
  priceTable.classList.add('show-price-item-2');
  priceTable.classList.remove('show-price-item-3');
});

priceButton_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceTable.classList.remove('show-price-item-1');
  priceTable.classList.remove('show-price-item-2');
  priceTable.classList.add('show-price-item-3');
});
