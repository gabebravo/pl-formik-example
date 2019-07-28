import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500], light: blue[200] },
    secondary: { main: lightBlue[500], light: lightBlue[200] }
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        backgroundColor: lightBlue[300],
        color: '#fff',
        margin: '0.5rem 0'
      }
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        color: '#fff'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        backgroundColor: '#fff',
        color: '#000'
      }
    },
    MuiSelect: {
      root: {
        width: 170
      }
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
