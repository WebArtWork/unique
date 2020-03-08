var Unique = require(__dirname+'/schema.js');
var mongoose = require('mongoose');
module.exports = function(sd) {
	if(mongoose.connection.readyState==0){
		mongoose.connect(sd.mongoUrl, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		mongoose.set('useCreateIndex', true);
		mongoose.Promise = global.Promise;
	}
	sd.crud('unique', {
		get: {
			query: function() {
		 		return {};
		 	}
		}, 
		delete: {
			query: function(req, res) {
				return {
					name: req.body._id
				};
			}
		}
	});
};
