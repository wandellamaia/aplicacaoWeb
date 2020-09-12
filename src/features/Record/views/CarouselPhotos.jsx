import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sliderimg: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    paddingLeft: 5,
  },
}));
const ShowPhotografy = () => {
  const classes = useStyles();
  return (
    <Grid
      style={{
        width: 100,
        height: 100,
      }}
    >
      <AliceCarousel buttonsDisabled autoPlay autoPlayInterval="3000">
        <img src="wakanda1.jpg" alt="First" className={classes.sliderimg} />
        <img src="wakanda2.jpg" alt="Second" className={classes.sliderimg} />
        <img src="wakanda3.jpg" alt="Third" className={classes.sliderimg} />
        <img src="wakanda4.jpg" alt="Third" className={classes.sliderimg} />
      </AliceCarousel>
    </Grid>
  );
};

export default ShowPhotografy;
