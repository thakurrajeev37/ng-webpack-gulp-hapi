angular.module('app').directive('addTodo', function($http) {
    return {
        restrict: 'EA',
        scope: {
            lists: '=lists'
        },
        template: "<input type='text', ng-model='todo'>" +
        "<button ng-click='add(todo)', ng-disabled='!todo'>Add</button>",
        link: function(scope, elem, attr) {

            scope.add = function(value) {
                var list = {done: false, title: value}
                scope.lists.unshift(list);
                //$http.post('/api/todo', list).success(function(data) {
                //    console.log('data', data);
                //});
                scope.todo = '';
            };


        }

    };
});