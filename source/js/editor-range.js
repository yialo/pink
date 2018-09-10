var buttonCrop = document.querySelector('.editor__toggle-button--crop');
var buttonColor = document.querySelector('.editor__toggle-button--color');
var buttonContrast = document.querySelector('.editor__toggle-button--contrast');
var rangeCrop = document.querySelector('.editor__item--crop');
var rangeColor = document.querySelector('.editor__item--color');
var rangeContrast = document.querySelector('.editor__item--contrast');

buttonCrop.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.remove('hidden');
  rangeColor.classList.add('hidden');
  rangeContrast.classList.add('hidden');
});

buttonColor.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.add('hidden');
  rangeColor.classList.remove('hidden');
  rangeContrast.classList.add('hidden');
});

buttonContrast.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.add('hidden');
  rangeColor.classList.add('hidden');
  rangeContrast.classList.remove('hidden');
});
