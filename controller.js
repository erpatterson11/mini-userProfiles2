angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(results){
      $scope.results = results;
      $scope.users = results.data.data;
    });
  }

  $scope.getUsers();

});
