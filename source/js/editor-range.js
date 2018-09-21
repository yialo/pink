var buttonCrop = document.querySelector('.editor__toggle-button--crop');
var buttonColor = document.querySelector('.editor__toggle-button--color');
var buttonContrast = document.querySelector('.editor__toggle-button--contrast');
var pathCrop = document.querySelector('.editor__path--crop');
var pathColor = document.querySelectorAll('.editor__path--color');
var pathContrast = document.querySelectorAll('.editor__path--contrast');
var rangeCrop = document.querySelector('.editor__item--crop');
var rangeColor = document.querySelector('.editor__item--color');
var rangeContrast = document.querySelector('.editor__item--contrast');

buttonCrop.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.remove('range-hidden');
  rangeColor.classList.add('range-hidden');
  rangeContrast.classList.add('range-hidden');
  pathCrop.classList.add('editor-active-toggle');
  for (var i = 0; i <= 1; i++) {
    pathColor[i].classList.remove('editor-active-toggle');
    pathContrast[i].classList.remove('editor-active-toggle');
  }
});

buttonColor.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.add('range-hidden');
  rangeColor.classList.remove('range-hidden');
  rangeContrast.classList.add('range-hidden');
  pathCrop.classList.remove('editor-active-toggle');
  for (var i = 0; i <= 1; i++) {
    pathColor[i].classList.add('editor-active-toggle');
    pathContrast[i].classList.remove('editor-active-toggle');
  }
});

buttonContrast.addEventListener('click', function(evt) {
  evt.preventDefault();
  rangeCrop.classList.add('range-hidden');
  rangeColor.classList.add('range-hidden');
  rangeContrast.classList.remove('range-hidden');
  pathCrop.classList.remove('editor-active-toggle');
  for (var i = 0; i <= 1; i++) {
    pathColor[i].classList.remove('editor-active-toggle');
    pathContrast[i].classList.add('editor-active-toggle');
  }
});
