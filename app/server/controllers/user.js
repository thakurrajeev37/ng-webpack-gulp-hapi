var Joi = require('joi'),
    Boom = require('boom'),
    User = require('../model/user').User;


exports.getAll = {
    handler: function (request, reply) {
        User.find({}, function(err, user) {
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
        User.findOne({ 'userId': request.params.userId }, function(err, user) {
            if (!err) {
                reply(user);
            } else {
                reply(Boom.badImplementation(err)); // 500 error
            }
        });
    }
};

exports.create = {
    validate: {
        payload: {
            userId   : Joi.string().required(),
            username  : Joi.string().required()
        }
    },
    handler: function (request, reply) {
        var user = new User(request.payload);
        user.save(function(err, user) {
            if (!err) {
                reply(user).created('/user/' + user._id); // HTTP 201
            } else {
                if (11000 === err.code || 11001 === err.code) {
                    reply(Boom.forbidden("please provide another user id, it already exist"));
                }
                else reply(Boom.forbidden(getErrorMessageFrom(err))); // HTTP 403
            }
        });
    }
};

exports.save = {
    handler: function (request, reply) {
        //console.log(request);
        //var user = new User(request.payload);
        //user.save(function(err, user) {
        //    if (!err) {
        //        reply(user).created('/user/' + user._id); // HTTP 201
        //    } else {
        //        if (11000 === err.code || 11001 === err.code) {
        //            reply(Boom.forbidden("please provide another user id, it already exist"));
        //        }
        //        else reply(Boom.forbidden(getErrorMessageFrom(err))); // HTTP 403
        //    }
        //});
    }
};




