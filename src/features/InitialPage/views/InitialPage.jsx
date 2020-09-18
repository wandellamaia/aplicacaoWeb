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
}));

const StartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Grid container spacing={3} justify="center">
        <Grid item style={{ width: '70%' }}>
          <OutlinedCard>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  A importância de manter um diário
                </Typography>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={9}>
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
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Typography style={{ marginLeft: 20 }}>
                    Falamos de autorreflexão porque escrever o seu diário é um
                    momento só seu, onde você é livre para ser o que é e
                    escrever. O diário é uma excelente ferramenta para revisitar
                    o passado e refletir sobre tudo com uma nova perspectiva.
                  </Typography>
                  <img
                    alt="pequeno_principe"
                    src="pequeno_principe.jpg"
                    height="150"
                    width="150"
                    style={{
                      paddingBottom: 10,
                      marginRight: 10,
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </OutlinedCard>
        </Grid>
        <Grid item style={{ width: '70%' }}>
          <OutlinedCard>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Benefícios em ter um diário
                </Typography>
                <Divider variant="middle" />
              </Grid>
              <Grid item xs={9}>
                <Typography>
                  Pode parecer coisa de criança ou de adolescente, mas manter um
                  diário na fase adulta tem muitos benefícios para a mente e a
                  alma.
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Typography>
                    Muito mais que apenas registrar o passar dos dias, registrar
                    os sentimentos pode ser uma forma de expressar ajuda ou de
                    manter em ordem os pensamentos. Além disso, registrar os
                    momentos e lições que aprendemos nos ajuda a fixar o
                    conhecimento adquirido e, ao reler, podemos relembrar cada
                    momento.
                  </Typography>
                  <img
                    alt="diario g1"
                    src="diario_g1.jpg"
                    height="200"
                    width="200"
                    style={{
                      float: 'right',
                      paddingBottom: 10,
                      marginLeft: 20,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h7" align="left">
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
    </>
  );
};

export default StartPage;
