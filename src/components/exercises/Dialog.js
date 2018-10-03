import React, { Component, Fragment } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  withWidth
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from './Form';
import { withContext } from '../../context';

export default withContext(withWidth()(class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  handleFormSubmit = (exercise) => {
    this.handleToggle();
    this.props.onCreate(exercise);
  }

  render() {
    const { open } = this.state,
      { width, muscles } = this.props;

    return <Fragment>
      <Button
        variant="fab"
        onClick={this.handleToggle}
        color="secondary"
        mini
      >
        <Add/>
      </Button>
      <Dialog
        open={open}
        onClose={this.handleToggle}
        fullWidth
        maxWidth={width}
      >
        <DialogTitle>
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, fill out the form below
          </DialogContentText>
          <Form
            muscles={muscles}
            onSubmit={this.handleFormSubmit}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  }
}))