angular.module('app')

  .controller('GalleryCtrl', ['$scope', '$http', 
    function($scope, $http){
      
      $scope.name = "Alex";

      // $scope.img1Location = "./public/images/background/modern-bookshelf.jpg";
      // $scope.img1Speed = 1;

      $scope.img2Location = '';
      $scope.img2Speed = 1;

      $http.get("./data/galleryImages.json")
      .then(function(res){
        $scope.images = res.data.gallery.images;
      });
    }]);