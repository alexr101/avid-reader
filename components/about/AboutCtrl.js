angular.module('app')

  .controller('AboutCtrl', ['$scope', '$http', 
    function($scope, $http){
      
      $scope.aboutUs = "About us";
      $scope.content = "we are a unique company that creates custom bookshelves for the avid book lover!"
    }]);