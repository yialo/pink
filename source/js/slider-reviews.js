var reviewButton_1 = document.querySelector('.reviews__toggle--1');
var reviewButton_2 = document.querySelector('.reviews__toggle--2');
var reviewButton_3 = document.querySelector('.reviews__toggle--3');
var reviewList = document.querySelector('.reviews__list');

reviewButton_1.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.add('show-reviews-item-1');
  reviewList.classList.remove('show-reviews-item-2');
  reviewList.classList.remove('show-reviews-item-3');
  reviewButton_1.classList.add('slider-active-toggle');
  reviewButton_2.classList.remove('slider-active-toggle');
  reviewButton_3.classList.remove('slider-active-toggle');
});

reviewButton_2.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.remove('show-reviews-item-1');
  reviewList.classList.add('show-reviews-item-2');
  reviewList.classList.remove('show-reviews-item-3');
  reviewButton_1.classList.remove('slider-active-toggle');
  reviewButton_2.classList.add('slider-active-toggle');
  reviewButton_3.classList.remove('slider-active-toggle');
});

reviewButton_3.addEventListener('click', function(evt) {
  evt.preventDefault();
  reviewList.classList.remove('show-reviews-item-1');
  reviewList.classList.remove('show-reviews-item-2');
  reviewList.classList.add('show-reviews-item-3');
  reviewButton_1.classList.remove('slider-active-toggle');
  reviewButton_2.classList.remove('slider-active-toggle');
  reviewButton_3.classList.add('slider-active-toggle');
});
