import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const StartBtn = ({ classes, text }) => (
  <Button 
    variant="raised" 
    fullWidth 
    color="primary" 
    className={classes.button}
  >
    {text}
  </Button>
);

StartBtn.propTypes = {
  text: PropTypes.string.isRequired,
}

export default withStyles(styles)(StartBtn);
