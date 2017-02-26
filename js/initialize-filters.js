'use strict';

window.initializeFilters = (function() {
    
    
    var filterID;
    var filterControls;
    var filterControlLabels;
    
    
    return {
        
        mouseMethod: function(filterControls, filterSwitcher) {
        
        var clickHandlerAndCallback = function(evt, filterSwitcher) {
            
            var clickedElement;
            clickedElement = evt.currentTarget;
            filterID = clickedElement.id;
        
            if (typeof filterSwitcher === 'function') {
                filterSwitcher(filterID);
            };
        };
        
        for (var i = 0; i < filterControls.length; i++) {
            filterControls[i].addEventListener('click', function() {
                clickHandlerAndCallback(event, filterSwitcher);                            
            });
        };
    },

        enterMethod: function(filterControlLabels, filterControls, filterSwitcher) {
        
            var unCheckRadios = function() {
                for (var i = 0; i < filterControlLabels.length; i++) {
                    filterControlLabels[i].setAttribute('aria-checked', 'false');
                    filterControls[i].removeAttribute('checked');
                };
            };
            
            var checkRadios = function(i) {
                filterControlLabels[i].setAttribute('aria-checked', 'true');
                filterControls[i].setAttribute('checked', 'true');
            };
            
            var actions = function(i, evt) {
                if (evt.keyCode === ENTER_KEY_CODE) {
                    filterID = filterControls[i].id;
                    unCheckRadios();
                    checkRadios(i);
                };
                if (typeof filterSwitcher === 'function') {
                    filterSwitcher(filterID);
                };    
            };
            
            var enterAction = function(i) {
                filterControlLabels[i].addEventListener('keydown', function() {
                    actions(i, event);
                });
            };
            
            for (var i = 0; i < filterControlLabels.length; i++) {
                enterAction(i);
            };
        },
    
    };
        

})()