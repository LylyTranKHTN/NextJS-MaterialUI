import React from 'react';
import PropTypes from 'prop-types';
import clxs from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'brown',
    color: 'white',
  },
  hot: {
    backgroundColor: 'red',
    color: 'white',
  },
  new: {
    backgroundColor: 'yellow',
    color: 'black',
  }
}));

const LABEL_LIST = [
  {
    label: 'Hot',
    class: 'hot',
  },
  {
    label: 'New',
    class: 'new',
  },
];

function ChipComponent(props) {
  const classes = useStyles();
  const labelSelected = LABEL_LIST.find(label => label.label === props.label);
  return (
    <Chip className={clxs(classes.root,
      { [labelSelected && labelSelected.class]: true })}
      label={props.label}
    />
  );
}

ChipComponent.propTypes = {
  label: PropTypes.string,
};

ChipComponent.defaultProps = {
  label: "New",
};

export default ChipComponent;
