import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';

import Colors from '../styles/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  divExternal: {
    borderStyle: 'solid',
    borderColor: Colors.IntermediateSecondary,
    borderWidth: '1px',
    borderRadius: '3px',
    width: '70%',
  },
}));

const ExternalBox = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.divExternal} xs sm={4} md={3}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

ExternalBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExternalBox;
