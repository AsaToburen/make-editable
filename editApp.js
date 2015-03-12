angular.module('editApp', [])
  .directive('makeEditable', function($sce) {
    return {
      template: '<input type="button" value="Edit" ng-show="!editable"><input type="button" value="Save" ng-show="editable"><span ng-transclude></span>',
      restrict: 'A',
      replace: false,
      transclude: true,
      link: function ($scope, element, attrs) {
        var editable = false;
        //element.on('click', function() {
        //  
        //});
      }
    };
  });