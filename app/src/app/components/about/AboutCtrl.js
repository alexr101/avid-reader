angular.module('app')

  .controller('AboutCtrl', ['$scope', '$http', 
    function($scope, $http){
      
      $scope.aboutUs = 'About us';
      $scope.content = 'we are a unique company that creates custom bookshelves for the avid book lover!';

      
      $http.get("./app/data/images/about.json")
        .then(function(res){
          var parallaxImages = res.data.parallaxImages
          $scope.parallaxImages = res.data.parallaxImages;
          for(var i = 0; i < parallaxImages.length; i++){
            var img = parallaxImages[i];
            console.log(i)
            $scope["img" + i] = {};
            $scope["img" + i].pattern = img.url;
            $scope["img" + i].speed = img.speed;
            $scope["img" + i].height = img.height;
          }
        });     
    }]);