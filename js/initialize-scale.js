'use strict';

var uploadResizeControlsButtonDec = document.querySelector('.upload-resize-controls-button-dec');
var uploadResizeControlsButtonInc = document.querySelector('.upload-resize-controls-button-inc');
var uploadResizeControlsValue = document.querySelector('.upload-resize-controls-value');

var uploadResizeControlsValueNumber = function() {
    return parseInt(uploadResizeControlsValue.value);
};

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

var createScale = function() {
    
    uploadResizeControlsValueNumber()

    filterImagePreview.style.transform = 'scale(.' + uploadResizeControlsValueNumber() + ')';

    uploadResizeControlsButtonInc.addEventListener('click', imageSizeUp);
    uploadResizeControlsButtonDec.addEventListener('click', imageSizeDown);
    
};