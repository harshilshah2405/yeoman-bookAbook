

angular.module('bookabookApp')
  .controller("viewBookController", function($scope,$http,$location){
        $scope.searchBy="title";
        $scope.userName="harshil";
        $scope.rating=3;
        
        var path= $location.path();
        var arr=path.split("/");
        var title=arr[arr.length-1];
        $scope.title=title;

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

       /* $http.get('http://localhost:9000/book/title') //get book by title from the books table
        .success(function(data) {
              alert('success');
          })
        .then(function(result){
          $scope.userBooks=result.data;
          console.log(result.data);
        })*/
      });