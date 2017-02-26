'use strict';

window.initializeScale = (function(){

var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadResizeControls = document.querySelector('.upload-resize-controls');
var sizeControlButton = uploadResizeControls.querySelectorAll('button');
var sizeControlsInput = uploadResizeControls.querySelector('input');
var SCALE_STEP = 25;
var INITIAL_SCALE = 100;

var scale = function() {
    return parseInt(sizeControlsInput.value);
};

var adjustScale = function() {
    filterImagePreview.style.transform = 'scale(' + scale() / 100 + ')';
};

var zoomUp = function(adjustScale) {
    if (scale() <= 100-SCALE_STEP) {
        sizeControlsInput.value = scale() + SCALE_STEP + '%';
    };
    if (typeof adjustScale === 'function') {
        adjustScale();
    };
};
    
var zoomDown = function(adjustScale) {
    if (scale() >= SCALE_STEP) {
        sizeControlsInput.value = scale() - SCALE_STEP + '%';
    };
    if (typeof adjustScale === 'function') {
        adjustScale();
    };
};
    
return function() {
    
    scale();
    
    adjustScale();

    sizeControlButton[1].addEventListener('click', function() {
        zoomUp(adjustScale);
    });
    
    sizeControlButton[0].addEventListener('click', function() {
        zoomDown(adjustScale);
    });
    
};

})();