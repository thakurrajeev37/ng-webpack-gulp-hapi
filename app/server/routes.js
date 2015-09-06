var User      = require('./controllers/user'),
    Static    = require('./static');

exports.endpoints = [
    {method: 'GET', path: '/{some*}', config: Static.get},
    { method: 'POST', path: '/user', config: User.create},
    { method: 'GET', path: '/user', config: User.getAll},
    { method: 'POST', path: '/api/todo', config: User.save}
];