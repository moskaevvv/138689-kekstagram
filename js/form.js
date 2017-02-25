'use strict';

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
var uploadFileInput = document.querySelector('#upload-file');




//1. Открытие-закрытие формы редактирования изображения

var uploadFormToggle = (function() {
    

var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

//1.1 Показ

var uploadSelectImageClose = function() {
    uploadSelectImage.classList.add('invisible');
};
var uploadOverlayOpen = function() {
    uploadOverlay.classList.remove('invisible');
};

uploadFileInput.addEventListener('change', uploadSelectImageClose);
uploadFileInput.addEventListener('change', uploadOverlayOpen);

//1.2 Закрытие

var uploadOverlayClose = function() {
    uploadOverlay.classList.add('invisible');
};
var uploadSelectImageOpen = function() {
    uploadSelectImage.classList.remove('invisible');
};

uploadFormCancel.addEventListener('click', uploadOverlayClose);
uploadFormCancel.addEventListener('click', uploadSelectImageOpen);

//1.3 +ARIA

var overlayClosePress = function(evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
        uploadFormCancel.setAttribute('aria-pressed', 'true');  
    };    
};

uploadFormCancel.addEventListener('keydown', overlayClosePress);
    
})();







//2. Применения фильтров


(function() {

        window.filterControlPanel = document.querySelector('.upload-filter-controls');
    window.filterControls = filterControlPanel.querySelectorAll('input');
    var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');
    var filterImagePreview = document.querySelector('.filter-image-preview');
    
    var filterSwitcher = function(filterID) {
        filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
        if (filterID.substr(7) !== 'filter-none') {
            filterImagePreview.classList.add(filterID.substr(7));
        };
    };
    
    var clickHandler = function(evt) {
        var clickedElement;
        clickedElement = evt.currentTarget;
        filterID = clickedElement.id;
    };
    
    
//2.1 Функция

for (var i = 0; i < filterControls.length; i++) {
    var filterID;
    filterControls[i].addEventListener('click', clickHandler); 
    filterControls[i].addEventListener('click', function() {
        filterSwitcher(filterID);                               
    });
};

    
    /*
//2.2 +ARIA

var labelNumber;
var filterControlLabels = filterControlPanel.querySelectorAll('.upload-filter-label');

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
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterChromeOn = function(evt) {
    labelNumber = 1;
    if (evt.keyCode === ENTER_KEY_CODE) {
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterSepiaOn = function(evt) {
    labelNumber = 2;
    if (evt.keyCode === ENTER_KEY_CODE) {
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterMarvinOn = function(evt) {
    labelNumber = 3;
    if (evt.keyCode === ENTER_KEY_CODE) {
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterPhobosOn = function(evt) {
    labelNumber = 4;
    if (evt.keyCode === ENTER_KEY_CODE) {
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
        unCheckRadios();
        checkRadios(labelNumber);
    };
};

var filterHeatOn = function(evt) {
    labelNumber = 5;
    if (evt.keyCode === ENTER_KEY_CODE) {
        var filterID = filterControls[labelNumber].id;
        var filterName = filterID.substr(7);
        initializeFilters(filterName);
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
    
    */
    
})();




//3. Масштабирование изображения

(function () {
    
    var filterImagePreview = document.querySelector('.filter-image-preview');
    var uploadResizeControls = document.querySelector('.upload-resize-controls');
    var SCALE_STEP = 25;
    var INITIAL_SCALE = 100;
    
    var adjustScale = function(scale) {
        filterImagePreview.style.transform = 'scale(' + scale() / 100 + ')';
    };
    
    uploadFileInput.addEventListener('change', function() {
        initializeScale(filterImagePreview, SCALE_STEP, INITIAL_SCALE, adjustScale, uploadResizeControls);
    });
    
})();

