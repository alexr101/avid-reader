var authCtrl = function($scope, $stateParams, Auth){
  $scope.header = 'Login';
  $scope.imgUrl = './public/images/background/modern-bookshelf.jpg';

  var initialView = 'login';

  $scope.register = $stateParams.register;
  $scope.login = $stateParams.login;

  if($scope.register && initialView == 'login') Auth.toggle();
  else if ($scope.register && initialView == 'register') Auth.toggle();


}

angular.module('app')
  .controller('AuthCtrl', ['$scope', '$stateParams', 'Auth', authCtrl]);