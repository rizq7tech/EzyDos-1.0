angular.module('your_app_name.filters', [])1

.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})

.filter('parseDate', function() {
  return function(value) {
      return Date.parse(value);
  };
})

;
