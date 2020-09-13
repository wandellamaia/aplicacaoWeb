import { Typography, makeStyles, Grid, Button, Card } from '@material-ui/core';
import React from 'react';
import Menu from './Menu';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import Colors from '../../../shared/styles/Colors';

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
  card: {
    width: '50%',
    marginTop: 20,
    marginRight: 20,
  },
}));

const StartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Grid container justify="flex-end">
        <Grid item className={classes.card}>
          <OutlinedCard>
            <Grid container justify="flex-end">
              <Grid item>
                <Typography variant="h5">
                  Benefícios em ter um diário
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      Ajudará a ter uma rotina, pois escrever é um ótimo
                      exercício para mente.
                    </li>
                    <li>
                      Facilita para expor suas emoções, sentimentos e
                      pensamentos.
                    </li>
                    <li>
                      Trará ao longo do tempo os benefícios da disciplina e da
                      autorreflexão.
                    </li>
                  </ul>
                </Typography>
                <Typography>
                  Falamos de autorreflexão porque escrever o seu diário é um
                  momento só seu, onde você é livre para ser o que é e escrever.
                  O diário é uma excelente ferramenta para revisitar o passado e
                  refletir sobre tudo com uma nova perspectiva.
                </Typography>
              </Grid>
              <Grid item>
                <img
                  alt="pequeno_principe"
                  src="pequeno_principe.jpg"
                  height="200"
                />
              </Grid>
            </Grid>
          </OutlinedCard>
        </Grid>
      </Grid>
    </>
  );
};

export default StartPage;
