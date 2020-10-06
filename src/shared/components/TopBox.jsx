import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import Colors from '../styles/Colors';

const useStyles = makeStyles((theme) => ({
  extern: {
    borderBottomStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
  },
  pTitle: {
    color: Colors.Alernative,
    fontSize: '32px',
    marginTop: '12px',
    textAlign: 'center',
    lineHeight: '32px',
    marginBottom: '12px',
    letterSpacing: '0.18px',
  },
}));

const TopBox = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.extern}>
      <Grid item xs>
        <p className={classes.pTitle}>{title}</p>
      </Grid>
    </Grid>
  );
};

TopBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopBox;
