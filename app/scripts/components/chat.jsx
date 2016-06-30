var React = require('react');

var MessageList = React.createClass({
  render: function(){
    var collection = this.props.collection;
    //console.log(collection);
    var messages = collection.map(function(message){
      return (
        <li key={message.get('_id')}>
          {message.get('username')} - {message.get('message')} - ({message.get('createdAt')})
        </li>
      )
    });
    return (
      <div className="post-list">
        <ul>
          {messages}
        </ul>
      </div>
    );
  }
});

var MessagePost = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var message = this.state.message;


    this.setState({'message': message});
    this.props.handleNewMessage(message)
    //console.log(message);
  },

  handleChange: function(e){
    e.preventDefault();
    this.setState({'message': e.target.value})
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <textarea onChange={this.handleChange} id="chat-post" rows="3" placeholder="Chat Message"></textarea>
        <input  id="post-submit" className="btn btn-success" type="submit"/>
      </form>
    );
  },
});

var MessageComponent = React.createClass({
  render: function(){
    //console.log(this.props.collection);
    return (
      <div className="col-md-8">
        <MessageList collection={this.props.collection}/>
        <MessagePost handleNewMessage={this.props.handleNewMessage} collection={this.props.collection}/>
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
  handleUsername: function(e){
    e.preventDefault();
    var username = this.state.username;
    this.props.handleUsername(username);
  },
  userChange: function(e){
    this.setState({'username': e.target.value});
  },
  render: function(){
    return (
      <div className="user col-md-6 col-xs-12">
        <form onSubmit={this.handleUsername} className="user-form">
          <label className="user-label" htmlFor="username">Username</label>
          <input onChange={this.userChange} id="username" type="text" placeholder="Username" />
          <input id="confirm" className="btn btn-success" type="submit" value="OK" />
        </form>
      </div>
    );
  }
});

var HeaderComponent = React.createClass({
  render: function(){
    var userForm = this.props.username ? this.props.username : <UsernameComponent handleUsername={this.props.handleUsername}/>

    return (
      <header>
        <h1 className="page-title col-md-6 col-xs-12">Front End Chat</h1>
        {userForm}
      </header>
    );
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {
      "username": ''
    }
  },

  componentWillMount: function(){
    var self = this;
    this.props.collection.on('add', function(){
      self.update()
    })
  },

  update: function(){
    this.forceUpdate();
  },

  handleNewMessage: function(message){

    var newMessage = {
      'username': this.state.username,
      'message': message,
      'createdAt': Date.now()
      }

    this.props.collection.create(newMessage);
    this.props.collection.sort();
    this.forceUpdate();
  },

  handleUsername: function(username){
    this.setState({'username': username});
  },

  render: function(){
    //console.log(this.props.collection);
    return (
      <div>
        <div className="row">
          <HeaderComponent handleUsername={this.handleUsername} username={this.state.username}/>
        </div>
        <div className="row chat-room">
          <ChatRoomComponent />
          <MessageComponent handleNewMessage={this.handleNewMessage} collection={this.props.collection}/>
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
