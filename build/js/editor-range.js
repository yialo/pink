var buttonCrop=document.querySelector(".editor__toggle-button--crop"),buttonColor=document.querySelector(".editor__toggle-button--color"),buttonContrast=document.querySelector(".editor__toggle-button--contrast"),pathCrop=document.querySelector(".editor__path--crop"),pathColor=document.querySelector(".editor__path--color"),pathContrast=document.querySelector(".editor__path--contrast"),rangeCrop=document.querySelector(".editor__item--crop"),rangeColor=document.querySelector(".editor__item--color"),rangeContrast=document.querySelector(".editor__item--contrast");buttonCrop.addEventListener("click",function(t){t.preventDefault(),rangeCrop.classList.remove("range-hidden"),rangeColor.classList.add("range-hidden"),rangeContrast.classList.add("range-hidden"),pathCrop.classList.add("editor-active-toggle"),pathColor.classList.remove("editor-active-toggle"),pathContrast.classList.remove("editor-active-toggle")}),buttonColor.addEventListener("click",function(t){t.preventDefault(),rangeCrop.classList.add("range-hidden"),rangeColor.classList.remove("range-hidden"),rangeContrast.classList.add("range-hidden"),pathCrop.classList.remove("editor-active-toggle"),pathColor.classList.add("editor-active-toggle"),pathContrast.classList.remove("editor-active-toggle")}),buttonContrast.addEventListener("click",function(t){t.preventDefault(),rangeCrop.classList.add("range-hidden"),rangeColor.classList.add("range-hidden"),rangeContrast.classList.remove("range-hidden"),pathCrop.classList.remove("editor-active-toggle"),pathColor.classList.remove("editor-active-toggle"),pathContrast.classList.add("editor-active-toggle")});