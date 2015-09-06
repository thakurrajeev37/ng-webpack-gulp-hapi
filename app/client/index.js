
// Vendors
window.$ = window.jQuery = require('jquery');
require('angular');
require('angular-route');
require('angular-resource');
require('../../bower_components/bootstrap/dist/js/bootstrap.js');
require('../../bower_components/bootstrap/dist/css/bootstrap.css');
require('../../bower_components/angular-bootstrap/ui-bootstrap-tpls.js');
require('../../bower_components/angular-bootstrap/ui-bootstrap-csp.css');


//Angular Module Definitions and Config including routes
angular.module('app', ['ngRoute', 'ngResource']).config(function($routeProvider){
    $routeProvider

        .when('/', {
            template: require('./templates/home.jade'),
            controller: "HomeController"
        })
        .when('/about', {
            template: require('./templates/about.jade'),
            controller: "AboutController"
        })

});

// Services
//var services = require.context('./services', true, /.js$/);
//services.keys().forEach(services);
//
//// Directives
//var directives = require.context('./directives', true, /.js$/);
//directives.keys().forEach(directives);

// Filters
//var filters = require.context('./filters', true, /.js$/);
//filters.keys().forEach(filters);

// Controllers
var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);
