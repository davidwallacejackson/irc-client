import DS from 'ember-data';

var Channel = DS.Model.extend({
  name: DS.attr('string'),
  server: DS.belongsTo('server'),

  users: DS.hasMany('user')
});

Channel.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "#somechannel",
      server: 1
    }
  ]
});

export default Channel;