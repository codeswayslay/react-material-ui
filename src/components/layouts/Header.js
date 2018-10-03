import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

const styles = {
  flex: {
    flex: 1
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}>
            We are Kings!
          </Typography>
          <CreateDialog/>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
