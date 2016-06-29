var React = require('react');

var HomePageComponent = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <div className="home-page row">
          <span>The Iron Yard</span>
          <img src='./images/TIIY-Logo-500px-white.png' />
          <span>Front End Chat</span>
          <a href='#chatroom/'><button className="btn btn-success">Start Chatting</button></a>
        </div>
      </div>
    );
  }
});

module.exports = HomePageComponent;
