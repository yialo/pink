var reviewButtonDesktopPrevious = document.querySelector('.reviews__button--previous');
var reviewButtonDesktopNext = document.querySelector('.reviews__button--next');
var reviewListDesktop = document.querySelector('.reviews__list');

reviewButtonDesktopPrevious.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (reviewListDesktop.classList.contains('show-reviews-item-3')) {
    reviewListDesktop.classList.remove('show-reviews-item-3');
    reviewListDesktop.classList.add('show-reviews-item-2');
  } else if (reviewListDesktop.classList.contains('show-reviews-item-2')) {
    reviewListDesktop.classList.remove('show-reviews-item-2');
    reviewListDesktop.classList.add('show-reviews-item-1');
  }
});

reviewButtonDesktopNext.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (reviewListDesktop.classList.contains('show-reviews-item-1')) {
    reviewListDesktop.classList.remove('show-reviews-item-1');
    reviewListDesktop.classList.add('show-reviews-item-2');
  } else if (reviewListDesktop.classList.contains('show-reviews-item-2')) {
    reviewListDesktop.classList.remove('show-reviews-item-2');
    reviewListDesktop.classList.add('show-reviews-item-3');
  }
});
