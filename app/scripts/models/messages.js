var Backbone = require('backbone');

var Message = Backbone.Model.extend({

})

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages '
})

module.exports = {
  'Message': Message,
  'MessageCollection': MessageCollection
}
