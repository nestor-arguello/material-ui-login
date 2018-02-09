import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  // withoutLabel: {
  //   marginTop: theme.spacing.unit * 3,
  // },
});

class SignInContainer extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <FormControl 
          fullWidth 
          className={classes.formControl}
          required
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email-signin-field"
            value={this.state.email}
            onChange={this.handleChange('email')}
            required
            autoFocus={true}
          />
        </FormControl>

        <FormControl 
          fullWidth
          className={classes.formControl}
          required
        >
          <InputLabel htmlFor="password">Contraseña</InputLabel>
          <Input 
            id="password-field"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

SignInContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignInContainer);