import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
}));

// const tileData = [
//   {
//     img: 'wmo2.jpg',
//     title: 'Image',
//     author: 'author',
//     cols: 0,
//   },
//   { img: 'pequeno_principe.jpg', title: 'Image', author: 'author', cols: 0 },
//   { img: 'girassol.jpg', title: 'Image', author: 'author', cols: 1 },
// ];
const ImageGridList = (Props) => {
  const classes = useStyles();
  const { fotos } = Props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {fotos?.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default ImageGridList;
ImageGridList.propTypes = {
  fotos: PropTypes.arrayOf(PropTypes.object),
};
ImageGridList.defaultProps = {
  fotos: [],
};
