import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
// import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
// import Visibility from 'material-ui-icons/Visibility';
// import VisibilityOff from 'material-ui-icons/VisibilityOff';
// import IconButton from 'material-ui/IconButton';
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

class SignUpContainer extends Component {
  state = {
    fullname: '',
    email: '',
    country: '',
    city: '',
    organization: '',
    phone: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
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
          <InputLabel htmlFor="fullname">Nombre completo</InputLabel>
          <Input
            id="fullname-field"
            value={this.state.fullname}
            onChange={this.handleChange('fullname')}
            required
          />
        </FormControl>

        <FormControl 
          fullWidth 
          className={classes.formControl}
          required
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email-signup-field"
            value={this.state.email}
            onChange={this.handleChange('email')}
            required
          />
        </FormControl>

        <FormControl 
          fullWidth 
          className={classes.formControl}
          required
        >
          <InputLabel htmlFor="country">País</InputLabel>
          <Input
            id="country-field"
            value={this.state.country}
            onChange={this.handleChange('country')}
            required
          />
        </FormControl>

        <FormControl 
          fullWidth 
          className={classes.formControl}
          required
        >
          <InputLabel htmlFor="city">Ciudad</InputLabel>
          <Input
            id="city-field"
            value={this.state.city}
            onChange={this.handleChange('city')}
            required
          />
        </FormControl>

        <FormControl 
          fullWidth 
          className={classes.formControl}
        >
          <InputLabel htmlFor="organization">Organización</InputLabel>
          <Input
            id="organization-field"
            value={this.state.organization}
            onChange={this.handleChange('organization')}
          />
        </FormControl>

        <FormControl 
          fullWidth 
          className={classes.formControl}
        >
          <InputLabel htmlFor="phone">Teléfono</InputLabel>
          <Input
            id="phone-field"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
          />
        </FormControl>
        
      </div>
    );
  }
}

SignUpContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpContainer);