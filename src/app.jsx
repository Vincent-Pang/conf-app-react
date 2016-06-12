import React from 'react';
import { render } from 'react-dom';

/* needed for material-ui */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './cmpt/main.cmpt.jsx';

injectTapEventPlugin();

const styles = {
};

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Main></Main>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
