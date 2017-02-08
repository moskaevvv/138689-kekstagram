'use strict';

var cleanAllFilters = function() {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    };

var filterID;
var filterName;

var filterAdd = function() {
    filterImagePreview.classList.add(filterName);
};

var filtrationOn = function() {
        if (filterName !== 'filter-none') {
            filterAdd();
        }
};

var initializeFilters = function(selectedElement) {

    filterID = selectedElement.id;
    filterName = filterID.substr(7);
    
    cleanAllFilters();
    filtrationOn();
    
};