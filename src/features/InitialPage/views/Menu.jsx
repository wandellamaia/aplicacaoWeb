import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Avatar,
  IconButton,
} from '@material-ui/core';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import React, { useState, useEffect } from 'react';
import Colors from '../../../shared/styles/Colors';

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
  },
  button: {
    color: '#FFFFFF',
  },
  avatar: {
    color: Colors.IntermediateSecondary,
    backgroundColor: Colors.Secondary,
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
            <>
              <Avatar className={classes.avatar}>W</Avatar>
              <IconButton
                onClick={() => {
                  history.push('/Registro');
                }}
              >
                <LibraryBooksOutlinedIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Button
                size="small"
                onClick={() => {
                  return history.push('/Login');
                }}
                className={classes.button}
              >
                Entrar
              </Button>
              <Button size="small" className={classes.button}>
                Cadastrar
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Menu;
