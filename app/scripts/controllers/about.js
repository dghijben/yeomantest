'use strict';

/**
 * @ngdoc function
 * @name yeomantestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomantestApp
 */
angular.module('yeomantestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Vagrant'
    ];
  });
