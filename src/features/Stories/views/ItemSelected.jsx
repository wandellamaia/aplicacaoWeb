import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Avatar} from '@material-ui/core';
import PropTypes from 'prop-types';
import ImageGridList from './ImageGridList';

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

const ItemSelected = (Props) => {
  // const classes = useStyles();
  const { option } = Props;

  const colors = ['pink', 'yellow', 'powderblue', 'coral', 'green'];
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      style={{ margin: 10 }}
    >
      <Grid item container spacing={1}>
        <Grid item>
          <Avatar alt="emoji2" src="feliz.png" />
        </Grid>
        <Grid item>
          <Typography variant="h6">{option[0].relato.humor}</Typography>
          <Typography variant="caption">
            {option[0].data.dia}/{option[0].data.mes}/{option[0].data.ano}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {option[0].relato.titulo}
        </Typography>
        <Typography align="center">{option[0].relato.texto}</Typography>
      </Grid>
      <Grid item>
        <ImageGridList fotos={option[0].fotos} />
      </Grid>
    </Grid>
  );
};
export default ItemSelected;
ItemSelected.propTypes = {
  option: PropTypes.array,
};
ItemSelected.defaultProps = {
  option: [],
};
