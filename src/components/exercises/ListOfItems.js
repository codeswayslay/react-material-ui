import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

export default ({ selectListItem, editListItem, deleteListItem, id, title }) => {

  const handleListClick = () => {
    selectListItem(id);
  }

  const handleDelete = () => {
    deleteListItem(id);
  }

  const handleEdit = () => {
    editListItem(id);
  }

  return (
    <ListItem
      button
      onClick={handleListClick}
    >
      <ListItemText primary={title}/>
      <ListItemSecondaryAction>
        <IconButton color="primary" onClick={handleEdit}>
          <Edit/>
        </IconButton>
        <IconButton color="primary" onClick={handleDelete}>
          <Delete/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}