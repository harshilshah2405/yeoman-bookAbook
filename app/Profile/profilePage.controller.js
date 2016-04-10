

angular.module('bookabookApp')
  .controller("profilePageController", function($scope,$http,$location){
        $scope.searchBy="title";
        $scope.userName="harshil";
        $scope.rating=3;

        $scope.changeView=function(view){
          $location.path(view);
        }

        $scope.onGo=function(){
          if($scope.searchBy=="user"){
            $location.path('/searchByUser/'+$scope.search);
          }
          else{
            $location.path('/searchBy/'+$scope.searchBy+'/'+$scope.search);
          }
        }

        $scope.dueBooks=[
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"harry potter and the deathly hallows",days:75},
        {name:"harry potter and the deathly hallows",days:75}];
       /* $http({
            url: "http://localhost:9000/book", 
            method: "POST",
             data: {Title:"asdfghj", Author:"asdfghjkdfg"}
           }).success(function(data){
              alert('success post');
           });*/

        $http.get('http://localhost:9000/book')
        .success(function(data) {
              alert('success');
          })
        .then(function(result){
          $scope.userBooks=result.data;
          console.log(result.data);
        })
      });
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
    };
  });*/
