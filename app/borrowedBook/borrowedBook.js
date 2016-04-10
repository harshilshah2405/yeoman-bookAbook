'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/borrowedBook', {
        templateUrl: 'app/borrowedBook/borrowedBook.html',
        controller: 'borrowedBookController',
        caseInsensitiveMatch: true
      });
  });