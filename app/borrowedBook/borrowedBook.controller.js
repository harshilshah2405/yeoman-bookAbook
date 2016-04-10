

angular.module('bookabookApp')
  .controller("borrowedBookController", function($scope,$http,$location){
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

        $http.get('http://localhost:9000/book')
        .success(function(data) {
              alert('got all borrowed books');
          })
        .then (function(result){
          $scope.borrowedBooks=result.data;
        })
      });
