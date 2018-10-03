import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  withStyles
} from '@material-ui/core';
import ListOfItems from './ListOfItems';
import Form from './Form';
import { withContext } from '../../context';
import { compose } from "recompose";

const styles = theme => ({
  paper: {
    padding: 20,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
});

export default compose(withContext,withStyles(styles))((
  {
    classes,
    muscles,
    exercisesByMuscle,
    category,
    onSelect,
    onDelete,
    onSelectEdit,
    onEdit,
    editMode,
    exercise,
    exercise: {
      id,
      title = "Welcome!",
      description = "Please, select an exercise from the list on the left"
    }
  }) =>
  <Grid container spacing={8} className={classes.container}>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        {console.log("category: ", category)}
        {exercisesByMuscle.map(([group, exercises]) =>
          !category || category === group
            ?
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{textTransform: "capitalize"}}
                color="secondary"
              >
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({id, title}) =>
                  <ListOfItems
                    key={id}
                    id={id}
                    title={title}
                    selectListItem={onSelect}
                    editListItem={onSelectEdit}
                    deleteListItem={onDelete}
                  />
                )}
              </List>
            </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item className={classes.item} xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography
          variant="display1"
          color="secondary"
        >
          {title}
        </Typography>
        {editMode
          ?
          <Form
            key={id}
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
          />
          :
          <Typography
            variant="subheading"
            margin="20px"
          >
            {description}
          </Typography>
        }
      </Paper>
    </Grid>
  </Grid>
)