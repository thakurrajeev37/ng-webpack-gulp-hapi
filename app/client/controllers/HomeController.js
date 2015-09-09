require('../assets/home.css');
angular.module('app').controller('HomeController', function($scope, $http){
    $scope.home = 'TO DO Application';
    $scope.lists = [];
    ///Get all To Dos.
    $http.get('/todos').success(function(data) {
        console.log('data', data);
        $scope.lists = data;
    });

});