angular.module('editApp', [])
  .directive('makeEditable', function() {
    return {
      template: '<input ng-init="editable=false" type="button" value="Edit" ng-click="editable=true" ng-show="!editable"><input type="button" value="Save" ng-click="editable=false" ng-show="editable"><span ng-transclude contenteditable="{{editable}}" ng-class="{ \'editable\': editable}"></span>',
      restrict: 'A',
      replace: false,
      transclude: true
    };
  });