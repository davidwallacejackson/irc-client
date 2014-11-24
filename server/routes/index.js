var models = require('../models');
var modelRestRouter = require('./common').modelRestRouter;

module.exports.Server = modelRestRouter(models.Server);
module.exports.Server.use('/:id/connection', require('./connection'));

module.exports.Channel = modelRestRouter(models.Channel);
module.exports.User = modelRestRouter(models.User);
module.exports.Message = modelRestRouter(models.Message);
