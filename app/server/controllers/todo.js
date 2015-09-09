var Joi = require('joi'),
    Boom = require('boom'),
    Todo = require('../model/todo').Todo;


exports.getAll = {
    handler: function (request, reply) {
        Todo.findTodos({}, function(err, user) {
            if (!err) {
                reply(user);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.getOne = {
    handler: function (request, reply) {
        Todo.findOne({ '_id': request.params._id }, function(err, user) {
            if (!err) {
                reply(user);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.create = {
    handler: function(request, reply) {
        Todo.saveTodo(request.payload, function(err, todo) {
            if (!err) {
                reply(todo);
            } else {
                reply(err);
            }
        });
    }
};

exports.remove = {
    handler: function(request, reply) {
        Todo.removeTodo(request.params.id, function(err, todo) {
            if (!err) {
                reply(todo);
            } else {
                reply(err);
            }
        });
    }
};




