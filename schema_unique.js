var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	name: String,
	category: String
});

Schema.methods.create = function(obj, user, sd) {
	this.name = obj.name;
	this.category = obj.category
}

module.exports = mongoose.model('Unique', Schema);
