import React from 'react';
import { Grid, IconButton, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Card from '../../../shared/components/OutlinedCard';
import Foot from '../../../shared/components/FootNote';
import Layout from '../../../shared/components/Layout';
import history from '../../../shared/history';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: 1.5,
    paddingRight: 100,
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton
              onClick={() => {
                history.push('/');
              }}
            >
              <ArrowBackIosOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            sm={11}
            xs={8}
          >
            <Typography className={classes.textHeader}>Meu diário</Typography>
          </Grid>
        </Grid>
      </Layout>
      <Grid container justify="center" style={{ paddingTop: 50 }}>
        <Grid item style={{ padding: 16 }}>
          <Avatar alt="Wandy Maia" src="wmo2.jpg" className={classes.large} />
        </Grid>
        <Grid item style={{ padding: 16 }}>
          <Typography align="justify" gutterBottom>
            Um pouco sobre mim
          </Typography>
          <Typography variant="h5" gutterBottom style={{ paddingTop: 10 }}>
            Olá, me chamo Wandella Maia.
          </Typography>
          <Typography align="justify" gutterBottom style={{ paddingTop: 10 }}>
            Sou analista de sistemas júnior, amo Data Science e estou
            aprendendo,
            <br /> amando e me descobrindo no frontend.
          </Typography>
          <Typography align="justify" gutterBottom style={{ paddingTop: 10 }}>
            Graduada em Ciência da Computação pela UFV,
            <br /> trabalhei no projeto de pesquisa na área de computação ciente
            de contexto no projeto <br />
            SCAPE: Sistema Sensível ao Contexto para Apoio à Participação em
            Eventos em (2016), <br />
            onde fiquei responsável por dar manutenção em aplicativo mobile. De
            2017 a 2020, <br /> fiz iniciação científica na área de dados, onde
            o objetivo foi pesquisar se é possível <br />
            aumentar a venda de celulares com base no perfil do usuário.
          </Typography>

          <Typography
            align="justify"
            variant="h6"
            gutterBottom
            style={{ paddingTop: 10 }}
          >
            Derivado de um projeto de mentoria, este programa "Meu diário"
            <br /> tem o objetivo de conhecer e aprofundar os conhecimentos{' '}
            <br /> das tecnologias reactJS e nodeJS.
          </Typography>
          <Grid item>
            <IconButton href="https://web.facebook.com/wandella.maia">
              <FacebookIcon />
            </IconButton>
            <IconButton to="">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://github.com/wandellamaia">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/wandella-maia-115a2373/">
              <LinkedInIcon />
            </IconButton>
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Grid>
      <Foot />
    </>
  );
};

export default AboutPage;
