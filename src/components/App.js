import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import 'typeface-roboto';
import { Header, Footer } from './layouts' //will go into folder layouts and then look for index.js
import Exercises from './exercises'; //will default to index.js in exercises folder, like in header and footer's case
import { muscles, exercises } from '../components/store';
import { Provider } from '../context';

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, muscle) => {
      return {...exercises, [muscle]: []}
    }, {});

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      // exercises[muscles] = exercises[muscles]
      //   ? [...exercises[muscles], exercise]
      //   : [exercise];

      exercises[muscles] = [...exercises[muscles], exercise];

      return exercises;
    }, initExercises));
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  }

  handleExerciseSelect = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(exercise => exercise.id === id),
      editMode: false
    }));
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      //we are simply hiding the ones that are being deleted
      //we don't want to actually delete anything in this case
      //bruh!
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(exercise => exercise.id === id),
      editMode: true
    }));
  }

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))
  }

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscle: this.getExercisesByMuscles(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleExerciseSelect
  })

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state;

    return <Provider value={this.getContext()}>
      {/*<Fragment>*/}
      <CssBaseline/>
      <Header />
      <Exercises
        //no need to pass the below since we're using
        //context to pass values now
        // muscles={muscles}
        // exercise={exercise}
        // category={category}
        // exercises={exercises}
        // editMode={editMode}
        // onSelect={this.handleExerciseSelect}
        // onSelectEdit={this.handleExerciseSelectEdit}
        // onDelete={this.handleExerciseDelete}
        // onEdit={this.handleExerciseEdit}
      />
      <Footer
        //no need to pass the below since we're using
        //context to pass values now
        // category={category}
        // muscles={muscles}
        // onSelect={this.handleCategorySelect}
      />
      {/*</Fragment>*/}
    </Provider>
  }
}

export default App;
