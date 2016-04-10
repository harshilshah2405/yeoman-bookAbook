

angular.module('bookabookApp')
  .controller("requestController", function($scope,$http,$location){
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

        $scope.onAccept=function(title){
          // up one step towards transition
          //remove the request from notification page
        }
        $scope.onDelete = function(title){
          //delete the request from database
        }
        $scope.dueBooks=[     //add http request for duebooks
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"Gandhi",days:45},
        {name:"harry potter and the deathly hallows",days:75},
        {name:"harry potter and the deathly hallows",days:75}];

        //add http request for notifications

      });