'use strict';

var filterAdd;
var filtrationOn;

var cleanAllFilters = function() {
    filterImagePreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    };

var initializeFilters = function(thisFilter) {
    
    filterAdd = function() {
        filterImagePreview.classList.add(thisFilter);
    };
    
    filtrationOn = function() {
        if (thisFilter !== 'filter-none') {
            filterAdd();
        }
    };
    
    cleanAllFilters();
    filtrationOn();
    
};