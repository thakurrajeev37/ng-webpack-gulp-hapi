require('../assets/home.css');
angular.module('app').controller('HomeController', function($scope){
    $scope.home = 'TO DO Application';
    $scope.lists = [{done: false, title: 'one'}, {done: false, title: 'two'}];

});