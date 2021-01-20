import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  CardActionArea,
  Card,
} from '@material-ui/core';
import PropTypes from 'prop-types';

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

const Item = (Props) => {
  // const classes = useStyles();
  const { story, index, setOption, option } = Props;
  console.log('Historia -', story);
  const colors = ['pink', 'yellow', 'powderblue', 'coral', 'green'];

  return (
    <Card style={{ marginBottom: 10 }}>
      <CardActionArea onClick={() => setOption(story)}>
        <Grid container key={story?.relato.titulo}>
          <Grid
            item
            style={{
              backgroundColor: colors[index % 5],
            }}
            xs={1}
          />
          <Grid item container justify="space-between" alignItems="center" xs>
            <Grid item container direction="column" alignItems="center" xs={3}>
              <Typography>{story.data.diaSemana}</Typography>
              <Typography>{story.data.dia}</Typography>
              <Typography>{story.data.mes}</Typography>
            </Grid>
            <Grid item container direction="column" xs={3}>
              <Typography variant="button" align="center">
                {story?.relato.titulo}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <img src="wmo2.jpg" alt="wmo2" width="90" height="90" />
            </Grid>
            <Grid />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
export default Item;
Item.propTypes = {
  // story: PropTypes.object,
  // index: PropTypes.number.isRequired,
  // option: PropTypes.object,
};
Item.defaultProps = {
  // story: undefined,
};
