import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ChatApp from './Chat/ChatApp';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';


import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import chat from './Chat/Chat';

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    
      // Form was submitted, now show the main App
      return (
        <ChatApp />
      );
    

  }

}
  //App.defaultProps = {};
*/
function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <AuthRoute exact path="/profile" component={Profile} />
          <AuthRoute exact path="/Chat" component={chat} />
          <AuthRoute exact path="/chat1" component={ChatApp} />
        </Container>
      </Router>
    </AuthProvider>
  );
}




export default App;
