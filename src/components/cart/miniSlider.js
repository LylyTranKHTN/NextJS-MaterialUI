import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
  },
  active: {
    borderColor: deepOrange[500],
    border: 'solid thin',
  }
}));

function MiniSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.items.map((item, index) => (
        <div
          key={index}
          className={props.active === item && classes.active}
          onMouseOver={() => props.onMouseOverItem(item)}>
          <Avatar
            variant="square"
            className={classes.square}
            src={item}
          />
        </div>
      ))}
    </div>
  );
}

MiniSlider.propTypes = {
  items: PropTypes.instanceOf(Array),
  onMouseOverItem: PropTypes.func.isRequired,
  active: PropTypes.string,
};

MiniSlider.defaultProps = {
  active: null,
}

export default MiniSlider;
