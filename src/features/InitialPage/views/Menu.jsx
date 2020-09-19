import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Avatar,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Layout from '../../../shared/components/Layout';
import history from '../../../shared/history';

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
  button: {
    color: '#FFFFFF',
  },
  textField: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 1.6,
  },
  menu: {
    color: '#FFFFFF',
    paddingTop: 20,
  },
}));

const Menu = () => {
  const [disapear, setDisapear] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const login = localStorage.getItem('email');
    if (login) {
      setDisapear(true);
    }
  }, [disapear]);

  return (
    <Layout>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <Typography className={classes.textHeader}>Meu diário</Typography>
        </Grid>
        <Grid item container xs={3} sm justify="flex-end">
          {disapear ? (
            <Grid item>
              <Avatar classeName={classes.avatar}>w</Avatar>
            </Grid>
          ) : (
            <Button
              size="small"
              onClick={() => history.push('/Login')}
              className={classes.button}
            >
              Entrar
            </Button>
          )}

          <Button size="small" className={classes.button}>
            Cadastrar
          </Button>

          <Button size="small" className={classes.button}>
            Sobre
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Menu;
