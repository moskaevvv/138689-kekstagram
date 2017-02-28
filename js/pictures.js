'use strict';

(function() {
    
    var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
    var pictures = [];
    
    var allPictures = document.querySelector('.pictures');
    var templateElement = document.querySelector('#picture-template');
    var elementToClone = templateElement.content.querySelector('.picture');
    
    var showAllPictures = function(array) {

          array.forEach(function(picture) {
              var newElement = elementToClone.cloneNode(true);

               var openGallery = function (event) {
                event.preventDefault();
                window.showGallery(picture);
              };

              var keyboardOpenGallery = function (event) {
                  if (event.keyCode && event.keyCode === ENTER_KEY_CODE) {
                      openGallery(event);
                  }
              };

              newElement.querySelector('img').src = picture.url;
              newElement.querySelector('.picture-likes').textContent = picture.likes;
              newElement.querySelector('.picture-comments').textContent = picture.comments.length;
              newElement.addEventListener('click', openGallery);
              newElement.addEventListener('keydown', keyboardOpenGallery);

            allPictures.appendChild(newElement);
          });

    };
    
    var pictureFiltersRow = document.querySelector('.filters'); 
    var showPicturesFilter = function () {
        pictureFiltersRow.classList.remove('hidden');
    };
    
    var onLoad = function(event) {
        pictures = event.target.response;
        showPicturesFilter();
        showAllPictures(pictures);
    };
    
    window.load(DATA_URL, onLoad);
    
})();