'use strict';


//1. Показ формы кадрирования
var uploadFileInput = document.querySelector('#upload-file');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadOverlay = document.querySelector('.upload-overlay');

var uploadSelectImageClose = function() {
    uploadSelectImage.classList.add('invisible');
};
var uploadOverlayOpen = function() {
    uploadOverlay.classList.remove('invisible');
};

uploadFileInput.addEventListener('change', uploadSelectImageClose);
uploadFileInput.addEventListener('change', uploadOverlayOpen);


//2. Закрытие формы кадрирования
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var uploadOverlayClose = function() {
    uploadOverlay.classList.add('invisible');
};
var uploadSelectImageOpen = function() {
    uploadSelectImage.classList.remove('invisible');
};

uploadFormCancel.addEventListener('click', uploadOverlayClose);
uploadFormCancel.addEventListener('click', uploadSelectImageOpen);


//3. Применение фильтра к изображению
var filterImagePreview = document.querySelector('.filter-image-preview');

var uploadFilterNone = document.querySelector('#upload-filter-none');
var uploadFilterChrome = document.querySelector('#upload-filter-chrome');
var uploadFilterSepia = document.querySelector('#upload-filter-sepia');
var uploadFilterMarvin = document.querySelector('#upload-filter-marvin');
var uploadFilterPhobos = document.querySelector('#upload-filter-phobos');
var uploadFilterHeat = document.querySelector('#upload-filter-heat');

var cleanAllFilters = function() {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
};
var addFilterChrome = function() {
    filterImagePreview.classList.add('filter-chrome');
};
var addFilterSepia = function() {
    filterImagePreview.classList.add('filter-sepia');
};
var addFilterMarvin = function() {
    filterImagePreview.classList.add('filter-marvin');
};
var addFilterPhobos = function() {
    filterImagePreview.classList.add('filter-phobos');
};
var addFilterHeat = function() {
    filterImagePreview.classList.add('filter-heat');
};

uploadFilterNone.addEventListener('click', cleanAllFilters);

uploadFilterChrome.addEventListener('click', cleanAllFilters);
uploadFilterChrome.addEventListener('click', addFilterChrome);

uploadFilterSepia.addEventListener('click', cleanAllFilters);
uploadFilterSepia.addEventListener('click', addFilterSepia);

uploadFilterMarvin.addEventListener('click', cleanAllFilters);
uploadFilterMarvin.addEventListener('click', addFilterMarvin);

uploadFilterPhobos.addEventListener('click', cleanAllFilters);
uploadFilterPhobos.addEventListener('click', addFilterPhobos);

uploadFilterHeat.addEventListener('click', cleanAllFilters);
uploadFilterHeat.addEventListener('click', addFilterHeat);


//4. Применение фильтра к изображению
var uploadResizeControlsButtonDec = document.querySelector('.upload-resize-controls-button-dec');
var uploadResizeControlsButtonInc = document.querySelector('.upload-resize-controls-button-inc');
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

var uploadResizeControlsValueNumber = function() {
    return parseInt(uploadResizeControlsValue.value);
};

filterImagePreview.style.transform = 'scale(.' + uploadResizeControlsValueNumber() + ')';

var imageSizeUp = function() {
    if (uploadResizeControlsValueNumber() <= 75) {
        uploadResizeControlsValue.value = uploadResizeControlsValueNumber() + 25 + '%';
        if (uploadResizeControlsValueNumber() < 100) {
            filterImagePreview.style.transform = 'scale(.' + uploadResizeControlsValueNumber() + ')';
        } else {
            filterImagePreview.style.transform = 'scale(1)';
        }
    };
};

var imageSizeDown = function() {
    if (uploadResizeControlsValueNumber() >= 25) {
        uploadResizeControlsValue.value = uploadResizeControlsValueNumber() - 25 + '%';
        filterImagePreview.style.transform = 'scale(.' + uploadResizeControlsValueNumber() + ')';
    };
};

uploadResizeControlsButtonInc.addEventListener('click', imageSizeUp);
uploadResizeControlsButtonDec.addEventListener('click', imageSizeDown);

