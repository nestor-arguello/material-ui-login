import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SignInContainer from './SignInContainer';
import SignUpContainer from './SignUpContainer';
import StartBtn from './StartBtn';

function TabContainer({ children, dir }) {
  return (
    <Typography  
      variant="headline" 
      component="div" 
      dir={dir} 
      style={{ padding: 8 * 3 }}
    >
    {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroudColor: theme.palette.background.paper,
  },
});

class LoginTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs 
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            fullWidth
          >
            <Tab label="Inicia sesión" />
            <Tab label="Regístrate" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            ¿Ya tienes cuenta?
            <SignInContainer />
            <br/>
            <StartBtn text="Actívate" />
          </TabContainer>
          
          <TabContainer dir={theme.direction}>
            ¡Bienvenido a URBO!
            <SignUpContainer />
            <br/>
            <StartBtn text="Regístrate" />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

LoginTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LoginTabs);