

angular.module('bookabookApp')
  .controller("addBookController", function($scope,$http,$log){
        $scope.searchBy="title";
        $scope.userName="harshil";
        $scope.rating=3;

         $scope.onGo=function(){
          if($scope.searchBy=="user"){
            $location.path('/searchByUser/'+$scope.search);
          }
          else{
            $location.path('/searchBy/'+$scope.searchBy+'/'+$scope.search);
          }
        }
        
        $scope.onVerify=function(){
          $http({
            url: "http://localhost:9000/book", 
            method: "POST",
             data: {Title: $scope.bookName, Author:$scope.bookAuthor}
           }).success(function(data){
              alert('success post');
           });
        }
        
        $scope.dueBooks=[
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"harry potter and the deathly hallows",days:75},
        {name:"harry potter and the deathly hallows",days:75}];
      });
        /*$http({
            url: "http://localhost:9000/book", 
            method: "POST",
             data: {Title:"asdfghj", Author:"asdfghjkdfg"}
           }).success(function(data){
              alert('success post');
           });*/
  /*.controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };*/
