/*
 * this leads to faster building time and smaller bundle
 * than using "import { Paper } from 'material-ui';"
 */
import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';
import { grey50 } from 'material-ui/styles/colors';

import Filter from './filter.cmpt.jsx';
import Talk from './talk.cmpt.jsx';

const styles = {
  main: {
    margin: '10vh 2vw 2vw 2vw',
    padding: '0 20px 20px 20px',
    backgroundColor: grey50
  },
  talk: {
    margin: '10px 10px 10px 10px'
  }
};

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    _.bindAll(this, ['search', 'handleWatch', 'handleRate']);

    this.state = {
      talkList: [
        {
          title: 'Angular2 vs ReactJS',
          speaker: 'Jason',
          rating: 5,
          watched: false,
          visible: true
        },
        {
          title: 'Managing Lambda with Apex',
          speaker: 'Roger',
          rating: 8.3,
          watched: false,
          visible: true
        },
        {
          title: 'Intro to AWS Lambda, when to use?',
          speaker: 'Vincent',
          rating: 6.8,
          watched: false,
          visible: true
        },
        {
          title: 'Stuff at our Startup powered by Scala',
          speaker: 'Jimmy',
          rating: 8.1,
          watched: false,
          visible: true
        },
        {
          title: 'Why Functional Programming is so good with Scala?',
          speaker: 'Cherry',
          rating: 9.8,
          watched: false,
          visible: true
        },
        {
          title: 'OneSky\'s take on using redux with AngularJs',
          speaker: 'Roger',
          rating: 7.8,
          watched: false,
          visible: true
        },
        {
          title: 'Intro to Flux and Redux',
          speaker: 'Joseph',
          rating: 8.7,
          watched: false,
          visible: true
        }
      ]
    };
  }

  /* print out the state when state changes */
  componentDidUpdate() {
    console.log(this.state.talkList);
  }

  handleWatch(index) {
    let { state } = this;
    state.talkList[index].watched = true;
    this.setState(state);
  }

  handleRate(index) {
    let { state } = this;
    state.talkList[index].rating = 10;
    this.setState(state);
  }

  search(term) {
    let { state } = this;
    term = term.trim().toLowerCase();
    state.talkList.map(talk => {
      talk.visible = (term === '' || _.startsWith(talk.speaker.toLowerCase(), term));
      return talk;
    });
    this.setState(state);
  }

  render() {
    return (
      <Paper style={styles.main}>
        <Filter handleSubmit={this.search}></Filter>
        {
          this.state.talkList.map((item, i) => (
            <div key={i} style={styles.talk}>
              <Talk
                {...item}
                index={i}
                handleWatch={this.handleWatch}
                handleRate={this.handleRate} />
            </div>
          ))
        }
      </Paper>
    );
  }

}
