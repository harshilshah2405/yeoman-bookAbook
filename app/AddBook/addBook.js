'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addbook', {
        templateUrl: 'app/AddBook/addBook.html',
        controller: 'addBookController',
        caseInsensitiveMatch: true
      });
  });