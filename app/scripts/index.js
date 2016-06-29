var Backbone = require('backbone');
var $ = require('jquery');

var router = require('./router');

$(function(){
  Backbone.history.start();
});


// var React = require('react');
// var ReactDOM = require('react-dom');
//
//
// var AppComponent = require('./components/chat.jsx').AppComponent;
// var MessageCollection = require('./models/messages.js').MessageCollection;
//
// ReactDOM.render(
//   React.createElement(AppComponent, {collection: MessageCollection}),
//   $('#container')[0]
// );
