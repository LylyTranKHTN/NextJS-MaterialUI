import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

const SubMenu = (props) => {
  const classes = useStyles();
  return (
    <CustomDropdown
      buttonText={props.title}
      dropdownHeader={props.header}
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      dropdownList={props.menu}
      hoverColor="rose"
    />
  )
}

SubMenu.propTypes = {
  menu: PropTypes.instanceOf([]).isRequired,
  title: PropTypes.string,
  header: PropTypes.string,
}

SubMenu.defaultProps = {
  title: "",
  header: "",
}

export default SubMenu;
