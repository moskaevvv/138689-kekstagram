'use strict';

var ENTER_KEY_CODE = 13;

var uploadFileInput = document.querySelector('#upload-file');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

var filterImagePreview = document.querySelector('.filter-image-preview');
var filterControlPanel = document.querySelector('.upload-filter-controls');
var filterControls = filterControlPanel.querySelectorAll('input');
var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');



//1. Показ формы кадрирования

var uploadSelectImageClose = function() {
    uploadSelectImage.classList.add('invisible');
};
var uploadOverlayOpen = function() {
    uploadOverlay.classList.remove('invisible');
};

uploadFileInput.addEventListener('change', uploadSelectImageClose);
uploadFileInput.addEventListener('change', uploadOverlayOpen);



//2. Закрытие формы кадрирования

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
var clickedElement;

var clickHandler = function(evt) {    
    clickedElement = evt.currentTarget;
};

for (var i = 0; i < filterControls.length; i++) {
    filterControls[i].addEventListener('click', clickHandler);
    filterControls[i].addEventListener('click', function() {
        initializeFilters(clickedElement);
    });
};



//3.1. +ARIA

var labelNumber;

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

var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');
var labelNumber;

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
        initializeFilters(filterControls[labelNumber]);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterChromeOn = function(evt) {
    labelNumber = 1;
    if (evt.keyCode === ENTER_KEY_CODE) {
        initializeFilters(filterControls[labelNumber]);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterSepiaOn = function(evt) {
    labelNumber = 2;
    if (evt.keyCode === ENTER_KEY_CODE) {
        initializeFilters(filterControls[labelNumber]);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterMarvinOn = function(evt) {
    labelNumber = 3;
    if (evt.keyCode === ENTER_KEY_CODE) {
        initializeFilters(filterControls[labelNumber]);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterPhobosOn = function(evt) {
    labelNumber = 4;
    if (evt.keyCode === ENTER_KEY_CODE) {
        initializeFilters(filterControls[labelNumber]);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterHeatOn = function(evt) {
    labelNumber = 5;
    if (evt.keyCode === ENTER_KEY_CODE) {
        initializeFilters(filterControls[labelNumber]);
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

createScale();
