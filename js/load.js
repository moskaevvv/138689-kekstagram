'use strict';

window.load = (function () {
  return function (dataUrl, onLoad) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function (event) {
      if (typeof onLoad === 'function') {
        onLoad(event);
      }
    });

    xhr.open('GET', dataUrl);
    xhr.send();
  };
})();
