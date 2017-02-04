'use strict';

var ENTER_KEY_CODE = 13;



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



//2.1 +ARIA

var overlayClosePress = function(evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
        uploadFormCancel.setAttribute('aria-pressed', 'true');  
    };    
};

uploadFormCancel.addEventListener('keydown', overlayClosePress);



//3. Применение фильтра к изображению с использованием делегирования
var filterImagePreview = document.querySelector('.filter-image-preview');
var filterControlPanel = document.querySelector('.upload-filter-controls');
var filterControls = filterControlPanel.querySelectorAll('input');
var clickedElement;

var cleanAllFilters = function() {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
};

var filterAdd = function() {
    var filterID = clickedElement.id;
    var filterName = filterID.substr(7);
    filterImagePreview.classList.add(filterName);
};

var filtrationOn = function() {
        if (clickedElement.id.substr(7) != 'filter-none') {
            filterAdd();
        }
};

var clickHandler = function(evt) {    
    clickedElement = evt.currentTarget;
    filtrationOn();
};

for (var i = 0; i < filterControls.length; i++) {
    filterControls[i].addEventListener('click', cleanAllFilters);
    filterControls[i].addEventListener('click', clickHandler);
};



//3.1. +ARIA
var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');
var labelNumber;

var filterAddFromKeyboard = function(labelNumber) {
    var filterID = filterControls[labelNumber].id;
    var filterName = filterID.substr(7);
    filterImagePreview.classList.add(filterName);
};

var unCheckRadios = function() {
    for (var i = 0; i < filterControlLabels.length; i++) {
        filterControlLabels[i].setAttribute('aria-checked', 'false');
        filterControls[i].removeAttribute('checked');
    };
};

var checkRadios = function(labelNumber) {
    filterControlLabels[labelNumber].setAttribute('aria-checked', 'true');
    filterControls[labelNumber].setAttribute('checked', 'true');
};

var noFilters = function(evt) {
    labelNumber = 0;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterChromeOn = function(evt) {
    labelNumber = 1;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        filterAddFromKeyboard(labelNumber);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterSepiaOn = function(evt) {
    labelNumber = 2;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        filterAddFromKeyboard(labelNumber);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterMarvinOn = function(evt) {
    labelNumber = 3;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        filterAddFromKeyboard(labelNumber);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterPhobosOn = function(evt) {
    labelNumber = 4;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        filterAddFromKeyboard(labelNumber);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterHeatOn = function(evt) {
    labelNumber = 5;
    if (evt.keyCode === ENTER_KEY_CODE) {
        cleanAllFilters();
        filterAddFromKeyboard(labelNumber);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

filterControlLabels[0].addEventListener('keydown', noFilters);
filterControlLabels[1].addEventListener('keydown', filterChromeOn);
filterControlLabels[2].addEventListener('keydown', filterSepiaOn);
filterControlLabels[3].addEventListener('keydown', filterMarvinOn);
filterControlLabels[4].addEventListener('keydown', filterPhobosOn);
filterControlLabels[5].addEventListener('keydown', filterHeatOn);



//4. Масштабирование изображения
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

