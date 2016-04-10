
angular.module('bookabookApp')
  .controller("searchByUserController", function($scope,$http,$location){
        $scope.searchBy="title";
        $scope.userName="harshil";
        $scope.rating=3;

        var path= $location.path();
        var arr=path.split("/");
        var user=arr[arr.length-1];
        $scope.user=user;

         $scope.onGo=function(){
          if($scope.searchBy=="user"){
            $location.path('/searchByUser/'+$scope.search);
          }
          else{
            $location.path('/searchBy/'+$scope.searchBy+'/'+$scope.search);
          }
        }

        $scope.onBorrow = function(book){
          // add the book of the user in the request table.
        }
        $scope.dueBooks=[
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"harry potter and the deathly hallows",days:75},
        {name:"harry potter and the deathly hallows",days:75}];

        $http.get('http://localhost:9000/book')   //change the request
        .success(function(data) {
              alert('got all book');
          })
        .then(function(result){
          $scope.userBooks=result.data;
          console.log(result.data);
        })
      });
