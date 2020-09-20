import { Typography, makeStyles, Grid, Button } from '@material-ui/core';

import React from 'react';

import Footnote from '../../../shared/components/Footnote';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    fontSize: 22,
    lineHeight: '1.5',
  },
  copyright: {
    fontSize: 12,
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
            Copyrigth © 2020 Wandella. Todos os direitos reservados.
          </Typography>
        </Grid>
        <Grid item>
          <Button size="small" className={classes.button}>
            <Typography className={classes.copyright}>Sobre</Typography>
          </Button>
        </Grid>
      </Grid>
    </Footnote>
  );
};

export default Footer;
