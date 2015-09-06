angular.module('app').directive('totalTodo', function() {
    return {
        restrict: 'EA',
        scope: {
            lists: '=lists'
        },
        replace: true,
        template: "<div><p>Total:</p><span>{{lists.length}}</span></div>",
        link: function(scope, elem, attr) {

            scope.$watch('lists', function() {
                console.log('watch', scope.lists.length);
                scope.total = scope.lists.length;
            });

        }

    }
});