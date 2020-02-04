import React from 'react';
import io from 'socket.io-client';
import config from '../config';
import Messages from './Messages';
import ChatInput from './ChatInput';
require('../styles/ChatApp.css');


class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
    
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }
  render() {
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
  
}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
