import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ btnType, children, ...rest }) => {
    const color = btnType === 'Submit' ? 'primary'
        : (btnType === 'Delete' ? 'secondary' : 'default');
  return (
    <div>
      <Button variant="contained" color={color} {...rest} >
        {children ? children : btnType}
      </Button>
    </div>
  );
}

ButtonComponent.propTypes = {
    className: PropTypes.string,
    btnType: PropTypes.oneOf([
        "Cancel", "Submit", "Delete"
    ]).isRequired,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

ButtonComponent.defaultProps = {
    children: "",
};

export default ButtonComponent;
