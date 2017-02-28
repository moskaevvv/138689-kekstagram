'use strict';

(function () {

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  var pictures = [];
  var sortedPictures;
  var NEW_PICTURES_COUNT = 10;

  var allPictures = document.querySelector('.pictures');
  var templateElement = document.querySelector('#picture-template');
  var elementToClone = templateElement.content.querySelector('.picture');


  var showAllPictures = function (array) {
    allPictures.innerHTML = null;

    array.forEach(function (picture) {
      var newElement = elementToClone.cloneNode(true);

      var openGallery = function (event) {
        event.preventDefault();
        window.showGallery(picture);
      };

      var keyboardOpenGallery = function (event) {
        if (event.keyCode && event.keyCode === window.ENTER_KEY_CODE) {
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
  var filterRowItems = pictureFiltersRow.querySelectorAll('.filters-radio');

  var showPicturesFilter = function () {
    pictureFiltersRow.classList.remove('hidden');
  };


  var getNewPictures = function (array) {

    var getRandomElement = function (elements) {
      return Math.floor(Math.random() * elements.length);
    };

    var tempArray = array.slice();
    sortedPictures = [];

    while (sortedPictures.length < NEW_PICTURES_COUNT) {
      var randomElement = getRandomElement(tempArray);
      sortedPictures.push(tempArray[randomElement]);
      tempArray.splice(randomElement, 1);
    }

    return sortedPictures;
  };


  var getDiscussedPictures = function (array) {
    var tempArray = array.slice();

    tempArray.sort(function (a, b) {
      if (a.comments.length < b.comments.length) {
        return 1;
      } else {
        return -1;
      }
    });

    sortedPictures = tempArray;
    return sortedPictures;
  };


  var picuresFiltrationOn = function () {
    for (var i = 0; i < filterRowItems.length; i++) {
      filterRowItems[i].onclick = function (event) {

        var clickedElement;
        clickedElement = event.currentTarget;

        if (clickedElement.id === 'filter-popular') {
          showAllPictures(pictures);

        } else if (clickedElement.id === 'filter-new') {
          getNewPictures(pictures);
          showAllPictures(sortedPictures);

        } else if (clickedElement.id === 'filter-discussed') {
          getDiscussedPictures(pictures);
          showAllPictures(sortedPictures);
        }
      };
    }
  };


  var onLoad = function (event) {
    pictures = event.target.response;
    showPicturesFilter();
    picuresFiltrationOn();
    showAllPictures(pictures);
  };

  window.load(DATA_URL, onLoad);

})();
