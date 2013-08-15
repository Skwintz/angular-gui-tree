'use strict';
angular.module('gui.tree', [
  'ngSanitize',
  'templates-main'
]).directive('tree', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'gui-tree/tree.tpl.html',
    link: function (scope, element, attrs) {
      scope.$on('remove', function (e) {
        var items = element[0].getElementsByClassName('gui-tree-item');
        for (var i = 0; i < items.length; i++) {
          angular.element(items[i]).scope().data.selected = false;
          angular.element(items[i]).scope().data.show = false;
        }
        e.targetScope.data.selected = true;
        e.targetScope.data.show = true;
      });
    }
  };
});
angular.module('templates-main', ['gui-tree/tree.tpl.html']);
angular.module('gui-tree/tree.tpl.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('gui-tree/tree.tpl.html', '<div>\n' + '    <script type="text/ng-template"  id="tree_item_renderer.html">\n' + '        <span ng-init="show=false" ng-click="show = !show; $parent.$emit(\'remove\'); $event.stopPropagation();" ng-class="{\'selected\': data.selected}" class="gui-tree-item">\n' + '            {{data.name}}\n' + '            <ul ng-show="show">\n' + '                <li ng-repeat="data in data.children" ng-include="\'tree_item_renderer.html\'" class="gui-tree-item"  ></li>\n' + '            </ul>\n' + '        </span>\n' + '    </script>\n' + '\n' + '    <ul>\n' + '        <span>\n' + '            <li ng-repeat="data in data" ng-include="\'tree_item_renderer.html\'" ></li>\n' + '        </span>\n' + '    </ul>\n' + '</div>\n' + '');
  }
]);