(function(){
  // create a directive
  var app = angular.module("myApp", []);

  // creates a controller called MainCtrl
  app.controller('MainCtrl', ['$scope','$http', function($scope, $http) {

    var fetch = function(){
      $promise = $http.get("script/fetch.php");
      $promise.then(onFetch, onFetchError);
    };

    var onFetch = function(response) {
      $scope.fetch = response.data;
    };

    var onFetchError = function(response) {
      $scope.FetchError = "Could not fetch data";
    };

    fetch();

    $scope.removeUser = function(id) {
      console.log(id);
    };

  }]);


})();
