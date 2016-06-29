import React from 'react';

import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  main: visible => ({
    display: visible ? 'block' : 'none'
  })
};

const Talk = ({title, speaker, rating, watched, index, visible, handleRate, handleWatch}) => {

  let watchLabel = watched ? 'Watch Again' : 'Watch';

  let generateIcon = iconName => (
    <FontIcon className='material-icons'>{iconName}</FontIcon>
  );

  return (
    <Card style={styles.main(visible)}>
      <CardHeader
        title={title}
        subtitle={`by ${speaker}`}
        avatar={<Avatar>{title.charAt(0)}</Avatar>}/>
      <CardText>
        <b>Rating:&nbsp;</b>{rating}
      </CardText>
      <CardActions>

        <FlatButton
          onClick={() => handleWatch(index)}
          secondary={true}
          icon={generateIcon('remove_red_eye')}
          label={watchLabel} />

        <FlatButton
          onClick={() => handleRate(index)}
          icon={generateIcon('star')}
          label='Rate' />

      </CardActions>
    </Card>
  );
};

let { string, bool, func, number } = React.PropTypes;
Talk.propTypes = {
  title: string.isRequired,
  speaker: string.isRequired,
  rating: number.isRequired,
  watched: bool.isRequired,
  index: number.isRequired,
  visible: bool.isRequired,
  handleWatch: func.isRequired,
  handleRate: func.isRequired
};

export default Talk;
