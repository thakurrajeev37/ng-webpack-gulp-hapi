var Hapi    = require('hapi'),
    Routes  = require('./routes'),
    Config  = require('./config/config');

var app = {};

app.config = Config;

var server = new Hapi.Server();

server.connection({port: app.config.server.port});

server.route(Routes.endpoints);

server.start(function() {
    console.log('Server started ', server.info.uri);
});