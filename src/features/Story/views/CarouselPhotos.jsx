import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';
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
const ShowPhotografy = (props) => {
  const { attachments } = props;
  const classes = useStyles();
  return (
    <Grid
      style={{
        width: 100,
        height: 100,
      }}
    >
      <AliceCarousel buttonsDisabled autoPlay autoPlayInterval="3000">
        {
          // attachments &&
          // attachments.map((attachment) => {
          //   <img src={attachment} alt="teste" className={classes.sliderimg} />;
          // })
        }
      </AliceCarousel>
    </Grid>
  );
};

export default ShowPhotografy;

ShowPhotografy.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.object),
};

ShowPhotografy.defaultProps = {
  attachments: undefined,
};
