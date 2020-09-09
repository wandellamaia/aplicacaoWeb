import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 250,
    height: 500,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ImageGridList = () => {
  const classes = useStyles();

  return (
    <GridList cellHeight={160} className={classes.gridList} cols={1}>
      <GridListTile cols={1}>
        <img src="wakanda1.jpg" />
      </GridListTile>
      <GridListTile cols={1}>
        <img src="wakanda2.jpg" />
      </GridListTile>
      <GridListTile cols={1}>
        <img src="wakanda3.jpg" />
      </GridListTile>
      <GridListTile cols={1}>
        <img src="wakanda4.jpg" />
      </GridListTile>
    </GridList>
  );
};

export default ImageGridList;
