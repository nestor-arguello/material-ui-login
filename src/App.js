import React, { Component } from 'react';
import Login from './components/Login';
import Reboot from 'material-ui/Reboot/Reboot';
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App" >
          <Login />

        </div>
    );
  }
}

export default App;
