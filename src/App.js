import React, { Component } from 'react';
import Login from './components/Login';
// import Reboot from 'material-ui/Reboot/Reboot';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="background-img" ></div>
        <div className="App" >
          <Login />

        </div>
      </div>
    );
  }
}

export default App;
