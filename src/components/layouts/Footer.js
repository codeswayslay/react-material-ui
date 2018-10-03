import React from 'react';
import { Paper, Tabs, Tab, withWidth } from '@material-ui/core';
import { withContext } from '../../context';
import { compose } from "recompose";

const Footer = props => {
  const { onCategorySelect, category, muscles, width } = props;

  const index = category
    ? muscles.findIndex(item => item === category) + 1
    : 0;

  const onIndexSelected = (e, index) => {
    onCategorySelect(index === 0 ? '' : muscles[index - 1]);
  }

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelected}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        scrollable={width === "xs"}
        scrollButtons="on"
      >
        <Tab key="all" label="All"/>
        {muscles.map(muscle =>
          <Tab key={muscle} label={muscle}/>
        )}
      </Tabs>
    </Paper>
  );
}

export default compose(withContext, withWidth())(Footer);
