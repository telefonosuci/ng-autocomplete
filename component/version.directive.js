'use strict';

angular
  .module('ngAutocomplete.version')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);