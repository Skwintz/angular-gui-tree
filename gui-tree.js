'use strict';

angular.module('gui.tree', ['ngSanitize'])

.directive('tree', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'gui-tree/tree.tpl.html',
    link: function (scope, element, attrs) {


      scope.$on('remove',function ( e ) {

        var items = element[0].getElementsByClassName('gui-tree-item');
        for (var i = 0; i < items.length; i++) {
          angular.element(items[i]).scope().data.selected = false;
          angular.element(items[i]).scope().data.show = false;
        }

        e.targetScope.data.selected = true;
        e.targetScope.data.show = true;

      })
    }
  };
}); 
