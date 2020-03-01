var Unique = require(__dirname+'/schema.js');
module.exports = function(sd) {
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
