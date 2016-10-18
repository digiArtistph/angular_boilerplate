angular.module('reverse.filter', [])

.filter('reverse', [function() {

   return function(str) {
      return str.split('').reverse().join();
   };
}]);
