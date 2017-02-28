'use strict';

window.load = (function () {
  return function (DATA_URL, onLoad) {

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function (event) {
      if (typeof onLoad === 'function') {
        onLoad(event);
      }
    });

    xhr.open('GET', DATA_URL);
    xhr.send();
  };
})();
