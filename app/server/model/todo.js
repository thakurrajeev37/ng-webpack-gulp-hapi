var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var TodoSchema = new Schema({
    title : { type: String },
    done  : { type: Boolean }
});
//save todo.
TodoSchema.statics.saveTodo = function(requestData, callback) {
    this.create(requestData, callback);
};

// get all todos.
TodoSchema.statics.findTodos = function(todos, callback) {
    this.find({ }, callback);
};

// remove todo.
TodoSchema.statics.removeTodo = function(todoId, callback) {
    this.remove({_id: todoId }, callback);
};

var todo = mongoose.model('todos', TodoSchema);

/** export schema */
module.exports = {
    Todo : todo
};