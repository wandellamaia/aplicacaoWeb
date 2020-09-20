import {
  Typography,
  makeStyles,
  Grid,
  Divider,
  Link,
  Paper,
  Box,
} from '@material-ui/core';
import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
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
  },
  formatText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatar: {
    backgroundColor: Colors.IntermediateSecondary,
    color: Colors.Secondary,
  },
}));

const StartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Grid container justify="center">
        <Grid item xs={8} style={{ paddingBottom: 20 }}>
          <OutlinedCard>
            <Grid container justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  A importância de manter um diário
                </Typography>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs className={classes.formatText}>
                <Typography align="justify">
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
              </Grid>
              <Grid item container justify="center" alignItems="center" xs>
                <img
                  alt="pequeno_principe"
                  src="pequeno_principe.jpg"
                  width="100"
                  height="100"
                />
              </Grid>
              <Grid item className={classes.formatText}>
                <Typography align="justify">
                  Falamos de autorreflexão porque escrever o seu diário é um
                  momento só seu, onde você é livre para ser o que é e escrever.
                  O diário é uma excelente ferramenta para revisitar o passado e
                  refletir sobre tudo com uma nova perspectiva.
                </Typography>
              </Grid>
            </Grid>
          </OutlinedCard>
        </Grid>
        <Grid item xs={8} justify="center">
          <OutlinedCard>
            <Grid container justify="center">
              <Grid item xs={12} xl className={classes.formatText}>
                <Typography variant="h5" align="center">
                  Benefícios em ter um diário
                </Typography>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={6} className={classes.formatText}>
                <Typography align="justify">
                  Pode parecer coisa de criança ou de adolescente, mas manter um
                  diário na fase adulta tem muitos benefícios para a mente e a
                  alma.
                </Typography>
                <Typography align="justify">
                  Muito mais que apenas registrar o passar dos dias, registrar
                  os sentimentos pode ser uma forma de expressar ajuda ou de
                  manter em ordem os pensamentos. Além disso, registrar os
                  momentos e lições que aprendemos nos ajuda a fixar o
                  conhecimento adquirido e, ao reler, podemos relembrar cada
                  momento.
                </Typography>
              </Grid>
              <Grid item container justify="center" alignItems="center" xs={6}>
                <img
                  alt="diario g1"
                  src="diario_g1.jpg"
                  width="100"
                  height="100"
                />
              </Grid>
              <Grid item xs className={classes.formatText}>
                <Typography
                  variant="h7"
                  align="left"
                  style={{ paddingTop: 20 }}
                >
                  Por Parque Memorial Japi
                </Typography>
                <Typography align="left">
                  <Link href="https://g1.globo.com/sao-paulo/sorocaba-jundiai/especial-publicitario/parque-memorial-japi/a-natureza-acolhendo-lembrancas/noticia/a-importancia-de-manter-um-diario.ghtml">
                    Acompanhe no G1
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </OutlinedCard>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default StartPage;
