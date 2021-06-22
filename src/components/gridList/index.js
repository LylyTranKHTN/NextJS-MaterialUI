import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { ListSubheader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    "@media (max-width: 575px)": {
      display: "none"
    },
    width: "100%",
    height: props => props.height,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function TitlebarGridList(props) {
  const { tileData, cols, cellHeight, height } = props;
  const classes = useStyles({ height });

  return (
    <div className={classes.root}>
      <GridList cellHeight={cellHeight} cols={cols} className={classes.gridList}>
        <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
          <ListSubheader component="div">{props.label}</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} onClick={() => props.onClick(tile.id)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.cost}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  label: PropTypes.string,
  tileData: PropTypes.arrayOf({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.number,
  }),
  onClick: PropTypes.func,
  cols: PropTypes.number,
  cellHeight: PropTypes.number,
  height: PropTypes.string,
}

TitlebarGridList.defaultProps = {
  label: 'Hot Item December',
  tileData: [
    {
      id: 0,
      img: 'images/bg.jpg',
      title: 'title',
      cost: 10000000,
    },
    {
      id: 1,
      img: 'images/bg3.jpg',
      title: 'title',
      cost: 20000000,
    },
    {
      id: 2,
      img: 'images/bg4.jpg',
      title: 'title',
      cost: 17000000,
    },
    {
      id: 4,
      img: 'images/bg7.jpg',
      title: 'title',
      cost: 10000000,
    },
    {
      id: 5,
      img: 'images/img1.jpg',
      title: 'title',
      cost: 20000000,
    },
    {
      id: 6,
      img: 'images/bg2.jpg',
      title: 'title',
      cost: 17000000,
    },
    {
      id: 7,
      img: 'images/bg2.jpg',
      title: 'title',
      cost: 17000000,
    },
  ],
  onClick: () => {},
  cols: 3,
  cellHeight: 180,
  height: '500px',
}

export default TitlebarGridList;
