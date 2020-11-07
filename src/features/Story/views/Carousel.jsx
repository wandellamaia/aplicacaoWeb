import React from 'react';
import PropTypes from 'prop-types';

import { Grid, makeStyles } from '@material-ui/core';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles((theme) => ({
  sliderimg: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    paddingLeft: 5,
  },
}));
const Carousel = (props) => {
  const { attachments } = props;
  const classes = useStyles();

  const items = attachments.map((file) => {
    return <img src={file} alt={file} className={classes.sliderimg} />;
  });

  return (
    <Grid
      style={{
        width: 100,
        height: 100,
      }}
    >
      <AliceCarousel
        buttonsDisabled
        autoPlay
        autoPlayInterval={3000}
        items={items}
      />
    </Grid>
  );
};

export default Carousel;

Carousel.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.object),
};

Carousel.defaultProps = {
  attachments: undefined,
};
