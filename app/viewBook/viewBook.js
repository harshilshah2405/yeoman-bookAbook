'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viewBook/:title', {
        templateUrl: 'app/viewBook/viewBook.html',
        controller: 'viewBookController'
      });
  });