import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import ImageGridList from './ImageGridList';

const ItemSelected = (Props) => {
  const { option } = Props;

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
          <Typography variant="h6">{option?.relato?.humor}</Typography>
          <Typography variant="caption">
            {option?.data?.dia}/{option?.data?.mes}/{option?.data?.ano}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {option?.relato?.titulo}
        </Typography>
        <Typography align="center">{option?.relato?.texto}</Typography>
      </Grid>
      <Grid item>
        <ImageGridList fotos={option?.fotos}/>
      </Grid>
    </Grid>
  );
};
export default ItemSelected;
ItemSelected.prototype = {
  option: PropTypes.objectOf(PropTypes.any),
};
ItemSelected.defaultProps = {
  option: {},
};
