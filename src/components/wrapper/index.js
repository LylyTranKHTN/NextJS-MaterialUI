import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import Header from '../Header/Header';
import Button from "../CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import SubMenu from './subMenu';

const useStyles2 = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Wrapper(props) {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        brand="New"
        color="rose"
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        leftLinks={
          <List className={classes2.list}>
            {props.menu.map((m1) => {
              if (m1.subMenu) {
                return (
                  <ListItem className={classes2.listItem}>
                    <SubMenu title={m1.title} menu={m1.subMenu}/>
                  </ListItem>
                )
              }
              return (
                <ListItem className={classes2.listItem}>
                  <Button
                    href="#pablo"
                    className={classes2.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    {m1.title}
                  </Button>
                </ListItem>
              );
            })}     
          </List>
        }
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

Wrapper.propTypes = {
  menu: PropTypes.instanceOf([]),
}

Wrapper.defaultProps = {
  menu: [
    {
      title: "Link",
    },
    {
      title: 'Clothers',
      subMenu: [
        {
          title: "Babys",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        },
        {
          title: "Youths",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        },
        {
          title: "Kids",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        }
      ]
    },
    {
      title: 'Shoes',
      subMenu: [
        {
          title: "Babys",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        },
        {
          title: "Youths",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        },
        {
          title: "Kids",
          url: "/",
          subMenu: [
            {
              title: "Babys",
              url: "/",
            },
            {
              title: "Youths",
              url: "/",
            },
            {
              title: "Kids",
              url: "/",
            }
          ]
        }
      ]
    },
    {
      title: "Link",
    },
  ]
}

export default Wrapper;
