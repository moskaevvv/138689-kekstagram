'use strict';

window.initializeFilters = (function() {
    
var filterImagePreview = document.querySelector('.filter-image-preview');

var filterAdd;
var filtrationOn;

return function(thisFilter) {
    
    filterAdd = function() {
        if (thisFilter !== 'filter-none') {
            filterImagePreview.classList.add(thisFilter);
        }
    };

    var cleanAllFilters = function(filterAdd) {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    };
    
    cleanAllFilters();
     filterAdd();
    
};

})();