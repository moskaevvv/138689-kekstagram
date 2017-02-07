'use strict';

var initializeFilters = function(selectedElement) {

    var filterID = selectedElement.id;
    var filterName = filterID.substr(7);
    
    var cleanAllFilters = function() {
        filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    };

    var filterAdd = function() {
        filterImagePreview.classList.add(filterName);
    };

    var filtrationOn = function() {
            if (filterName !== 'filter-none') {
                filterAdd();
            }
    };
    
    cleanAllFilters();
    filtrationOn();
    
};