'use strict';

/**
 * @ngdoc function
 * @name famousAngularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the famousAngularTestApp
 */
angular.module('famousAngularTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
