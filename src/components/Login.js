import React, { Component } from 'react';
// import Button from 'material-ui/Button';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
import './LoginTabs'
import LoginTabs from './LoginTabs';
// import InputContainer from './InputContainer';

const style = {
  minWidth: '20em',
  minHeight: '40em'
};

export default class Login extends Component {
  render() {
    return (
      <div>
        <Paper style={style}  elevation={16} >
          <LoginTabs/>
        </Paper>
      </div>
    );
  }
}
