import React from 'react';
import _ from 'lodash';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const styles = {
  main: {
    width: '100%',
    marginBottom: 30
  },
  input: {
    width: '50%',
    marginBottom: 10
  },
  submit: {
    marginBottom: 30
  }
};

export default class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    _.bindAll(this, ['handleSubmit']);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render() {
    return (
      <div style={styles.main}>
        <form onSubmit={this.handleSubmit} action=''>
          <TextField
            /* double binding */
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
            style={styles.input}
            floatingLabelText='Speaker' />
          <br />
          <RaisedButton
            type='submit'
            style={styles.submit}
            label='Filter'
            primary={true} />
          <Divider />
        </form>
      </div>
    );
  }

}

let { func } = React.PropTypes;
Filter.propTypes = {
  handleSubmit: func.isRequired
};
