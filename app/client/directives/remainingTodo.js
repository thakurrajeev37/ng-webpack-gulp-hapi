angular.module('app').directive('remainingTodo', function() {
    return {
        restrict: 'EA',
        scope: {
            lists: '=lists'
        },
        replace: true,
        template: "<div><p>remaining:</p><span>{{remaining()}}</span></div>",
        link: function(scope, elem, attr) {

                scope.remaining = function() {
                    var count = 0;
                    angular.forEach(scope.lists, function(todo) {
                        count += todo.done ? 0 : 1;
                    });
                    return count;
                };

        }

    };
});