var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var AppComponent = require('./components/chat.jsx').AppComponent;

ReactDOM.render(
  React.createElement(AppComponent),
  $('#container')[0]
);
