'use strict';

window.initializeScale = (function () {

  return function (filterImagePreview, scaleStep, initialScale, adjustScale, uploadResizeControls) {

    var sizeControlButton = uploadResizeControls.querySelectorAll('button');
    var sizeControlsInput = uploadResizeControls.querySelector('input');

    sizeControlsInput.value = initialScale;

    var scale = function () {
      return parseFloat(sizeControlsInput.value);
    };

    var zoomUp = function () {
      if (scale() <= 100 - scaleStep) {
        sizeControlsInput.value = scale() + scaleStep + '%';
      }
      if (typeof adjustScale === 'function') {
        adjustScale(scale);
      }
    };

    var zoomDown = function () {
      if (scale() > scaleStep) {
        sizeControlsInput.value = scale() - scaleStep + '%';
      }
      if (typeof adjustScale === 'function') {
        adjustScale(scale);
      }
    };

    adjustScale(scale);


    sizeControlButton[1].addEventListener('click', function () {
      zoomUp();
    });

    sizeControlButton[0].addEventListener('click', function () {
      zoomDown();
    });

  };

})();
