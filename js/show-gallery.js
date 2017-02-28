'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var overlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var overlayImg = galleryOverlay.querySelector('.gallery-overlay-image');
  var likeCount = galleryOverlay.querySelector('.likes-count');
  var commentsCount = galleryOverlay.querySelector('.comments-count');


  var keyboardCloseGallery = function (event) {
    if (event.keyCode && event.keyCode === ENTER_KEY_CODE) {
      galleryOff(event);
    }
  };

  var escCloseGallery = function (event) {
    if (event.keyCode && event.keyCode === ESCAPE_KEY_CODE) {
      galleryOff(event);
    }
  };


  var galleryOff = function () {
    galleryOverlay.classList.toggle('invisible', true);
    overlayClose.removeEventListener('click', galleryOff);
  };

  return function (data) {
    overlayClose.addEventListener('click', galleryOff);
    galleryOverlay.classList.toggle('invisible', false);
    overlayImg.src = data.url;
    likeCount.textContent = data.likes;
    commentsCount.textContent = data.comments.length;
    document.addEventListener('keydown', escCloseGallery);
    overlayClose.addEventListener('keydown', keyboardCloseGallery);
    overlayClose.focus();
  };
})();
