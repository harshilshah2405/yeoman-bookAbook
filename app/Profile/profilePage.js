'use strict';

angular.module('bookabookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/Profile/profilePage.html',
        controller: 'profilePageController'
      });
  });