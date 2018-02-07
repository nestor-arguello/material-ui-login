import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class InputContainer extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" >
        <TextField 
          required
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          fullWidth
        />
        <TextField 
          required
          id="password"
          label="Contraseña"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
          fullWidth
        />
      </form>
    )
  }
}

InputContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputContainer);