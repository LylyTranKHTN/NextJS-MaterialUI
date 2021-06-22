import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

function RatingComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating-read"
        defaultValue={props.defaultValue}
        precision={props.precision}
        precision={0.5}
      />
    </div>
  );
}

RatingComponent.PropTypes = {
  defaultValue: PropTypes.number,
  precision: PropTypes.number,
}

RatingComponent.defaultProps = {
  defaultValue: 0,
  precision: 0.5,
}

export default RatingComponent;
