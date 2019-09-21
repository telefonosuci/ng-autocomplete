/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

angular
  .module('ngAutocomplete.version', [])
  .value('version', '0.1');
'use strict';

angular
  .module('ngAutocomplete.version')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);
})();