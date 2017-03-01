'use strict';

window.ENTER_KEY_CODE = 13;
window.ESCAPE_KEY_CODE = 27;

var uploadFileInput = document.querySelector('#upload-file');


// 1. Открытие-закрытие формы редактирования изображения

(function () {


  var uploadSelectImage = document.querySelector('#upload-select-image');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');

// 1.1 Показ

  var uploadSelectImageClose = function () {
    uploadSelectImage.classList.add('invisible');
  };
  var uploadOverlayOpen = function () {
    uploadOverlay.classList.remove('invisible');
  };

  uploadFileInput.addEventListener('change', uploadSelectImageClose);
  uploadFileInput.addEventListener('change', uploadOverlayOpen);
    

// 1.2 Закрытие

  var uploadOverlayClose = function () {
    uploadOverlay.classList.add('invisible');
  };
  var uploadSelectImageOpen = function () {
    uploadSelectImage.classList.remove('invisible');
  };

  uploadFormCancel.addEventListener('click', uploadOverlayClose);
  uploadFormCancel.addEventListener('click', uploadSelectImageOpen);

// 1.3 +ARIA

  var overlayClosePress = function (evt) {
    if (evt.keyCode === window.ENTER_KEY_CODE) {
      uploadFormCancel.setAttribute('aria-pressed', 'true');
    }
  };

  uploadFormCancel.addEventListener('keydown', overlayClosePress);

})();


// 2. Применения фильтров


(function () {

  var filterControlPanel = document.querySelector('.upload-filter-controls');
  var filterControls = filterControlPanel.querySelectorAll('input');
  var filterImagePreview = document.querySelector('.filter-image-preview');

    // callback
  var filterSwitcher = function (filterID) {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    if (filterID.substr(7) !== 'filter-none') {
      filterImagePreview.classList.add(filterID.substr(7));
    }
  };

    // 2.1 Функция
  window.initializeFilters.mouseMethod(filterControls, filterSwitcher);

    // 2.2 +ARIA

  var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');
  window.initializeFilters.enterMethod(filterControlLabels, filterControls, filterSwitcher);


})();


// 3. Масштабирование изображения

(function () {

  var filterImagePreview = document.querySelector('.filter-image-preview');
  var uploadResizeControls = document.querySelector('.upload-resize-controls');
  var SCALE_STEP = 25;
  var INITIAL_SCALE = 100;

  var adjustScale = function (scale) {
    filterImagePreview.style.transform = 'scale(' + scale() / 100 + ')';
  };
    
    uploadFileInput.addEventListener('change', function () {
    window.initializeScale(filterImagePreview, SCALE_STEP, INITIAL_SCALE, adjustScale, uploadResizeControls);
  });

})();

