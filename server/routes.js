var express = require('express');

var models = require('./models');

var modelRestRouter = function(model) {
  var router = express.Router();

  var getAll = function(req, res) {
    var promise = model.fetchAll();

    promise.then(function (servers) {
      res.send(servers);
    })
  };

  var getId = function(req, res) {
    model.get(req.params.id)

    .then(function(record) {
      res.send(record);
    });
  };

  var create = function(req, res) {
    model.create(req.body)

    .then(function(created) {
      res.send(created);
    });
  };

  var update = function(req, res) {
    //delete any id in the request body -- otherwise, it could override the id
    //in the path
    delete req.body['id'];

    var promise = new model({
      id: req.params.id
    }).save(req.body, {
      patch: true
    });

    promise.then(function(updated) {
      res.send(updated);
    });
  };

  var destroy = function(req, res) {
    //null out any id in the request body -- otherwise, it could override the id
    //in the path

    var promise = new model({
      id: req.params.id
    }).destroy();

    promise.then(function() {
      res.send(
        {success: true}
      );
    });
  };

  router.get('/', getAll);
  router.post('/', create);

  router.get('/:id', getId);
  router.put('/:id', update);
  router.delete('/:id', destroy);

  return router;
};

module.exports.Server = modelRestRouter(models.Server);
module.exports.Channel = modelRestRouter(models.Channel);
module.exports.User = modelRestRouter(models.User);
module.exports.Message = modelRestRouter(models.Message);
