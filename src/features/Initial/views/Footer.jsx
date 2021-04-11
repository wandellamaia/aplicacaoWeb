import React from 'react';
import { Typography, makeStyles, Grid, Button } from '@material-ui/core';
import history from '../../../shared/history';
import Footnote from '../../../shared/components/Footnote';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    fontSize: 12,
    lineHeight: '1.5',
  },
  copyright: {
    fontSize: 12,
    lineHeight: '1.5',
  },
  button: {
    paddingTop: 15,
    marginRight: 15,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Footnote>
      <Grid container justify="center" style={{ marginLeft: 15 }}>
        <Grid item xs>
          <Typography className={classes.textHeader}>Feito com ❤</Typography>
          <Typography className={classes.copyright}>
            Meu diário - Copyrigth © 2020 Wandella. Todos os direitos
            reservados.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size="small"
            className={classes.button}
            onClick={() => history.push('/Sobre')}
          >
            <Typography className={classes.copyright}>Sobre</Typography>
          </Button>
        </Grid>
      </Grid>
    </Footnote>
  );
};

export default Footer;
