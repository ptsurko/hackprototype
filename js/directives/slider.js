angular.module('EpamHistory')
  .directive('slider', [function() {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs) {
        $(element).slider();
        //
        // // Update slider from model value
        // ngModel.$render = function() {
        //   element.slider('value', ngModel.$viewValue);
        // };
        //
        // element.bind('slide', function(event, ui) {
        //   ngModel.$setViewValue(ui.values || ui.value);
        //   scope.$apply();
        // });

        // scope.$watch(attrs.ngModel, function() {
        //   //ngModel.$render();
        // }, true);
      }
    }
  }]);
