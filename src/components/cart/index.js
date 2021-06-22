import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton, Collapse, Typography } from '@material-ui/core';
import { AddShoppingCart, FavoriteBorder, ExpandMore } from '@material-ui/icons';
import Chip from '../chip';
import { Rating } from 'components';
import MiniSlider from './miniSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
    position: 'relative',
  },
  media: {
    height: 200,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  collapse: {
    padding: '10px 20px',
  }
}));

function MediaCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [image, setImage] = React.useState(props.images[0]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMouseOverSlider = (item) => {
    setImage(item);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Chip label={props.label} />
        <CardMedia
          className={classes.media}
          image={image}
          title={props.title}
        />
        <CardContent>
          <MiniSlider
            items={props.images}
            onMouseOverItem={handleMouseOverSlider}
            active={image}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.summarize}
          </Typography>
          {props.rating && <Rating {...props.rating} />}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton color="primary" onClick={props.onClickAddToCart}>
          <AddShoppingCart />
        </IconButton>
        <IconButton color="primary" onClick={props.onClickAddFavorite}>
          <FavoriteBorder />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapse}>
        {props.description}
      </Collapse>
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  summarize: PropTypes.string,
  isCanSeeMore: PropTypes.bool,
  label: PropTypes.string,
  cost: PropTypes.string,
  onClickAddToCart: PropTypes.func,
  onClickAddFavorite: PropTypes.func,
  images: PropTypes.instanceOf(Array),
  rating: PropTypes.shape({}),
};

MediaCard.defaultProps = {
  title: "Test",
  summarize: "",
  label: "New",
  description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
  across all continents except Antarctica",
  onClickAddToCart: () => {},
  onClickAddFavorite: () => {},
  images: ['images/img1.jpg', 'images/bg.jpg', 'images/bg2.jpg', 'images/bg3.jpg'],
  rating: null,
};

export default MediaCard;
