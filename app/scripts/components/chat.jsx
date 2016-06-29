var React = require('react');

var MessageList = React.createClass({
  render: function(){
    return (
      <div className="post-list">
        <ul></ul>
      </div>
    );
  }
});

var MessagePost = React.createClass({
  render: function(){
    return (
      <form className="message-form">
        <textarea id="chat-post" rows="3" placeholder="Chat Message"></textarea>
        <input id="post-submit" className="btn btn-success" type="submit"/>
      </form>
    );
  }
});

var MessageComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-8">
        <MessageList />
        <MessagePost />
      </div>
    )
  }
});

var ChatRooms = React.createClass({
  render: function(){
    return (
      <li>{this.props.roomName}</li>
    );
  }
})

var ChatRoomComponent = React.createClass({
  render: function(){
    return (
      <div className="col-md-offset-1 col-md-2">
        <div className="room-list">
          <h2>Chat Rooms</h2>
          <ul>
            <ChatRooms roomName='Main'/>
          </ul>
        </div>
      </div>
    )
  }
})

var UsernameComponent = React.createClass({
  render: function(){
    return (
      <div className="user col-md-6 col-xs-12">
        <form className="user-form">
          <label className="user-label" htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Username" />
          <input id="confirm" className="btn btn-success" type="submit" value="OK" />
        </form>
      </div>
    );
  }
});

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <header>
        <h1 className="page-title col-md-6 col-xs-12">Front End Chat</h1>
        <UsernameComponent />
      </header>
    );
  }
});

var AppComponent = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="row chat-room">
          <ChatRoomComponent />
          <MessageComponent />
        </div>
      </div>
    );
  }
});


module.exports = {
  'AppComponent': AppComponent,
  'HeaderComponent': HeaderComponent,
  'MessageComponent': MessageComponent
}
