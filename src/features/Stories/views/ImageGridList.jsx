import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
}));
//Trabalhar melhor as chaves das imagens
const ImageGridList = (Props) => {
  const classes = useStyles();
  const { fotos } = Props;
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {fotos?.map((tile) => (
          <GridListTile key={tile.img+tile.cols} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default ImageGridList;
