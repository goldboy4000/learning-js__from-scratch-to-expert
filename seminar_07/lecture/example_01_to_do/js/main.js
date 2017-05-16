(function (window) {
    'use strict';
    var init = function () {
        var events = new CustomEvent('addTask');
        var list = new List('.to-do-list');
        if (list) {
            list.setupEvents();
        }
    };

    window.addEventListener('load', init);

}(window));