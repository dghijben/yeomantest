'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomantestApp
 */
angular.module('yeomantestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
