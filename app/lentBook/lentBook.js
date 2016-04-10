'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lentBook', {
        templateUrl: 'app/lentBook/lentBook.html',
        controller: 'lentBookController',
        caseInsensitiveMatch: true
      });
  });