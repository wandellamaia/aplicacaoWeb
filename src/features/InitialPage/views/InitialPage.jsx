import {
  Typography,
  makeStyles,
  Grid,
  Divider,
  Link,
  Paper,
} from '@material-ui/core';
import React from 'react';
import Menu from './Menu';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import Colors from '../../../shared/styles/Colors';
// import Colors from '../../../shared/styles/Colors';
// import pequeno from '../../../../public/pequeno_principe.jpg';

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
    width: '70%',
    marginBottom: 20,
  },
  image: {
    paddingLeft: 20,
    marginTop: 30,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
}));

const StartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Grid container>
        <Grid item>
          <Grid container className={classes.card}>
            <OutlinedCard>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  A importância de manter um diário
                </Typography>
                <Divider />
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
              <Grid item xs={6} className={classes.image}>
                <img
                  alt="pequeno_principe"
                  src="pequeno_principe.jpg"
                  height="250"
                />
              </Grid>
            </OutlinedCard>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.card}>
            <OutlinedCard>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  Benefícios em ter um diário
                </Typography>
                <Divider />
                <Typography>
                  Pode parecer coisa de criança ou de adolescente, mas manter um
                  diário na fase adulta tem muitos benefícios para a mente e a
                  alma.
                </Typography>
                <Typography>
                  Muito mais que apenas registrar o passar dos dias, registrar
                  os sentimentos pode ser uma forma de expressar ajuda ou de
                  manter em ordem os pensamentos. Além disso, registrar os
                  momentos e lições que aprendemos nos ajuda a fixar o
                  conhecimento adquirido e, ao reler, podemos relembrar cada
                  momento.
                </Typography>
                <Typography variant="h6" align="right">
                  Por Parque Memorial Japi
                </Typography>
                <Typography align="right">
                  <Link href="https://g1.globo.com/sao-paulo/sorocaba-jundiai/especial-publicitario/parque-memorial-japi/a-natureza-acolhendo-lembrancas/noticia/a-importancia-de-manter-um-diario.ghtml">
                    Acompanhe no G1
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.image}>
                <img alt="diario g1" src="diario_g1.jpg" height="250" />
              </Grid>
            </OutlinedCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default StartPage;
