'use strict';

angular.module('famousAngularTestApp')
  .controller('MainCtrl', function ($scope, $famous) {

    $scope.flipIt = function() {
      $famous.find('fa-flipper')[0].flip();
    };

    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.views = [{color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}];
    $scope.myEventHandler = new EventHandler();

  });