'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var overlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var overlayImg = galleryOverlay.querySelector('.gallery-overlay-image');
  var likeCount = galleryOverlay.querySelector('.likes-count');
  var commentsCount = galleryOverlay.querySelector('.comments-count');


  var enterCloseGallery = function (event) {
    if (event.keyCode && event.keyCode === window.ENTER_KEY_CODE) {
      hideGallery(event);
    }
  };


  var escCloseGallery = function (event) {
    if (event.keyCode && event.keyCode === window.ESCAPE_KEY_CODE) {
      hideGallery(event);
    }
  };


  var hideGallery = function () {
    galleryOverlay.classList.add('invisible');
    overlayClose.removeEventListener('click', hideGallery);
    overlayClose.removeEventListener('click', enterCloseGallery);
    overlayClose.removeEventListener('click', escCloseGallery);
  };


  return function (data) {
    overlayClose.addEventListener('click', hideGallery);
    galleryOverlay.classList.toggle('invisible', false);
    overlayImg.src = data.url;
    likeCount.textContent = data.likes;
    commentsCount.textContent = data.comments.length;
    document.addEventListener('keydown', escCloseGallery);
    overlayClose.addEventListener('keydown', enterCloseGallery);
    overlayClose.focus();
  };
})();
