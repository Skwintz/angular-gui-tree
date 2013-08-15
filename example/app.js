angular.module('App', [
  'gui.tree'
])


var TreeController = function ( $scope ) {
  $scope.open=true;
  $scope.doParent = function ($parent) {
    console.log($parent);
  }

  scouuup = $scope;
  $scope.data = [
    {
      name: 'root',
      children: [
        {
          name: 'child 1',
          children: [
            {
              name: 'child 1-2',
              children: [
                {
                  name: 'foop',
                  children: [
                    {
                      name: 'poop',
                      children: [

                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'child 2',
          children: []
        }
      ]
    },
    {
      name: 'tool',
      children: [
        {
          name: 'child 1',
          children: [
            {
              name: 'child 1-2',
              children: []
            }
          ]
        },
        {
          name: 'child 2',
          children: []
        }
      ]
    }
  ];
};