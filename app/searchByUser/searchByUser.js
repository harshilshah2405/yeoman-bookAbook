'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/searchByUser/:userName', {
        templateUrl: 'app/searchByUser/searchByUser.html',
        controller: 'searchByUserController',
        caseInsensitiveMatch: true
      });
  });