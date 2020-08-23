import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import Colors from '../../../shared/styles/Colors';

const useStyles = makeStyles((theme) => ({
  div: {
    borderBottomStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
  },
  pTitle: {
    color: 'black',
    fontSize: '32px',
    marginTop: '12px',
    textAlign: 'center',
    lineHeight: '32px',
    marginBottom: '12px',
    letterSpacing: '0.18px',
  },
}));
export default function LoginPage({ title }) {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.div}>
        <Grid item xs>
          <p className={classes.pTitle}>{title}</p>
        </Grid>
      </Grid>
    </>
  );
}

LoginPage.propTypes = {
  title: PropTypes.string.isRequired,
};
