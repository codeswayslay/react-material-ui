import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import registerServiceWorker from './registerServiceWorker';
import { red, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: blue.A400
    },
    type: "dark"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
