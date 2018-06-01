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

    $scope.addUser = function (name, email, phone) {
      $promise = $http({
        method: 'POST',
        url: 'script/addUser.php',
        data: {name: name, email: email, phone: phone}
      });
      $promise.then(onAddUser, onErrorAddUser);
    };

    var onAddUser = function(response) {
      if (response.data == 'Success') {
        $scope.user = response.data;
        document.getElementById("form").reset();
        fetch();
      } else {
        $scope.errorUser = 'Failed uploading record';
      }
    };

    var onErrorAddUser = function(response) {
      $scope.errorUser = response.data;
    };

    $scope.removeUser = function(id) {
        var promise = $http({
          method: "POST",
          url: "script/removeUser.php",
          data: {id: id}
        });
        promise.then(onSuccess, onError);
    };

    var onSuccess = function (response) {
      fetch();
    }

    var onError = function (response) {
      $scope.error = response.data;
      console.log($scope.error);
    }

  }]);


})();
