'use strict';

window.initializeScale = (function () {

  return function (filterImagePreview, SCALE_STEP, INITIAL_SCALE, adjustScale, uploadResizeControls) {

    var sizeControlButton = uploadResizeControls.querySelectorAll('button');
    var sizeControlsInput = uploadResizeControls.querySelector('input');

    sizeControlsInput.value = INITIAL_SCALE;

    var scale = function () {
      return parseFloat(sizeControlsInput.value);
    };

    var zoomUp = function () {
      if (scale() <= 100 - SCALE_STEP) {
        sizeControlsInput.value = scale() + SCALE_STEP + '%';
      }
      if (typeof adjustScale === 'function') {
        adjustScale(scale);
      }
    };

    var zoomDown = function () {
      if (scale() > SCALE_STEP) {
        sizeControlsInput.value = scale() - SCALE_STEP + '%';
      }
      if (typeof adjustScale === 'function') {
        adjustScale(scale);
      }
    };

    adjustScale(scale);
      
      
    var noZoomUp = function() {
        sizeControlButton[1].removeEventListener('click', function () {
          zoomUp(adjustScale);
      });
    };
      

    var noZoomDown = function() {
        sizeControlButton[1].removeEventListener('click', function () {
          zoomDown(adjustScale);
      });
    };
      

    sizeControlButton[1].addEventListener('click', function () {
      zoomUp(adjustScale);
    });

    sizeControlButton[0].addEventListener('click', function () {
      zoomDown(adjustScale);
    });

  };

})();
