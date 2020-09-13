import { Typography, makeStyles, Grid, Button } from '@material-ui/core';
import React from 'react';
import Layout from '../../../shared/components/Layout';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 30,
    marginTop: 5,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  textField: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 1.6,
  },
  menu: {
    color: '#FFFFFF',
  },
}));

const Menu = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={3} sm={10}>
          <Typography className={classes.textHeader}>Meu diário</Typography>
        </Grid>
        <Grid item>
          <Button size="small" className={classes.menu}>
            Entrar
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" className={classes.menu}>
            Cadastrar
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" className={classes.menu}>
            Sobre
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Menu;
