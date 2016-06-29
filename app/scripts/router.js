var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var AppComponent = require('./components/chat.jsx').AppComponent;
var MessageCollection = require('./models/messages.js').MessageCollection;
var HomePageComponent = require('./components/home.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chatroom/': 'chatroom'
  },

  initialize: function(){
    var messageCollection = this.messageCollection = new MessageCollection();

    setInterval(function(){messageCollection.fetch()}, 3000);
  },

  index: function(){
    ReactDOM.render(
      React.createElement(HomePageComponent),
      $('#container')[0]
    )

  },

  chatroom: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(AppComponent, {collection: self.messageCollection}),
      $('#container')[0]
    );

  }
});

var router = new Router();

module.exports = router;
