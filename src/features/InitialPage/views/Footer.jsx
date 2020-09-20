import { Typography, makeStyles, Grid, Button } from '@material-ui/core';

import React from 'react';

import Footnote from '../../../shared/components/Footnote';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    lineHeight: '1.5',
  },
  copyright: {
    lineHeight: '1.5',
  },
  button: {
    paddingTop: 15,
    marginRight: 15,
    color: '#FFFFFF',
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Footnote>
      <Grid container justify="center" style={{ marginLeft: 15 }}>
        <Grid item xs>
          <Typography className={classes.textHeader}>Meu diário</Typography>
          <Typography className={classes.copyright}>
            Copyrigth © 2020
          </Typography>
        </Grid>
        <Grid item>
          <Button size="small" className={classes.button}>
            Sobre
          </Button>
        </Grid>
      </Grid>
    </Footnote>
  );
};

export default Footer;
