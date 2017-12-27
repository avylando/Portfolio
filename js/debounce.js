'use strict';

(function () {
  window.debounce = function (func, wait) {
    var lastTimeout;

    return function () {
      var args = arguments;
      var onComplete = function () {
        lastTimeout = null;
        func.apply(this, args);
      };

      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(onComplete, wait);
    };
  };
})();

