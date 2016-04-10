'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/request', {
        templateUrl: 'app/request/request.html',
        controller: 'requestController',
        caseInsensitiveMatch: true
      });
  });