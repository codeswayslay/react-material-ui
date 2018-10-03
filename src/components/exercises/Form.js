import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

export default class extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { exercise } = this.props;

    console.log("width: ", this.props.width);

    return exercise ? exercise :
      {
        title: '',
        description: '',
        muscles: ''
      }
  }

  // we don't need this for the edit because the key variable is being sent from the index.
  // apparently anytime you send a key variable to a component, the component automatically
  // remounts! Cool!
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.exercise !== prevProps.exercise) {
  //     this.setState({
  //       ...this.props.exercise
  //     })
  //   }
  // }

  handleChange = name => ({ target: { value} }) => {
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    //Validate!
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
    // this.setState(this.getInitsialState());
  }

  render() {
    const { title, description, muscles } = this.state,
      { exercise, muscles: categories } = this.props;

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          fullWidth
        />
        <br/>
        <FormControl
          fullWidth
        >
          <InputLabel htmlFor="muscles">
            Muscles
          </InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(category =>
              <MenuItem
                key={category}
                value={category}
              >
                {category}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <br/>
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          fullWidth
        />
        <br/>
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
          disabled={!title || !muscles}
        >
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}