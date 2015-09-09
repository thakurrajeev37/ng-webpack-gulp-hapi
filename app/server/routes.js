var User      = require('./controllers/user'),
    Todo      = require('./controllers/todo'),
    Static    = require('./static');

exports.endpoints = [
    { method: 'GET',  path: '/{some*}', config: Static.get},
    { method: 'POST', path: '/user',    config: User.create},
    { method: 'GET',  path: '/user',    config: User.getAll},
    { method: 'POST', path: '/todo',    config: Todo.create},
    { method: 'GET',  path: '/todos',   config: Todo.getAll},
    { method: 'DELETE',  path: '/removeTodo/{id}',   config: Todo.remove}
];