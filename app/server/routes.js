var  Static = require('./static');

exports.endpoints = [
    {method: 'GET', path: '/{some*}', config: Static.get}
];