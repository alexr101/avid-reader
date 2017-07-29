angular.module('app')

  .controller('GiftCardCtrl', ['$scope', '$http',
    function($scope, $http){
      
      $scope.name = "Alex";

      $http.get("./data/galleryImages.json")
      .then(function(res){
        $scope.images = res.data.gallery.images;
      });
    }]);