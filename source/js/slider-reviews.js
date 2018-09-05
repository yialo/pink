var reviewButton_1 = document.querySelector('.slider__toggle--1');
var reviewButton_2 = document.querySelector('.slider__toggle--2');
var reviewButton_3 = document.querySelector('.slider__toggle--3');
var reviewList = document.querySelector('.reviews__list');

reviewButton_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.add('show-reviews-item-1');
  reviewList.classList.remove('show-reviews-item-2');
  reviewList.classList.remove('show-reviews-item-3');
});

reviewButton_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.remove('show-reviews-item-1');
  reviewList.classList.add('show-reviews-item-2');
  reviewList.classList.remove('show-reviews-item-3');
});

reviewButton_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.remove('show-reviews-item-1');
  reviewList.classList.remove('show-reviews-item-2');
  reviewList.classList.add('show-reviews-item-3');
});
