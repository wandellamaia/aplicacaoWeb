import { Grid, Typography, Avatar, ButtonBase } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TuneIcon from '@material-ui/icons/Tune';
import Layout from '../../../shared/components/Layout';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import mock from '../../../shared/utils/mockStories';
import Colors from '../../../shared/styles/Colors';
import ImageGridList from './ImageGridList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const storiesPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const colors = ['pink', 'yellow', 'powderblue', 'coral', 'green'];
  return (
    <>
      <Layout />
      <Grid container justify="space-between" style={{ marginTop: 10 }}>
        <Grid item container justify="center" alignItems="center" xs={7}>
          <Grid item xs={7}>
            <OutlinedCard>
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                style={{ margin: 10 }}
              >
                <Grid item container spacing={1}>
                  <Grid item>
                    <Avatar alt="emoji2" src="feliz.png" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{mock[0].relato.humor}</Typography>
                    <Typography variant="caption">
                      {mock[0].data.dia}/{mock[0].data.mes}/{mock[0].data.ano}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="center">
                    {mock[0].relato.titulo}
                  </Typography>
                  <Typography align="center">{mock[0].relato.texto}</Typography>
                </Grid>
                <Grid item>
                  <ImageGridList />
                </Grid>
              </Grid>
            </OutlinedCard>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item style={{ marginBottom: 10 }}>
            <OutlinedCard>
              <Grid item container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: Colors.Alernative }}
                  >
                    Publicações
                  </Typography>
                </Grid>
                <Grid item>
                  <TuneIcon />
                </Grid>
              </Grid>
            </OutlinedCard>
          </Grid>
          {mock &&
            mock.map((story, index) => {
              return (
                <Grid
                  item
                  key={story.relato.titulo}
                  style={{ marginBottom: 10 }}
                >
                  <OutlinedCard>
                    <Grid
                      item
                      style={{ backgroundColor: colors[index % 5] }}
                      xs={1}
                    />
                    <Grid
                      item
                      container
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        xs={3}
                      >
                        <Typography>{story.data.diaSemana}</Typography>
                        <Typography>{story.data.dia}</Typography>
                        <Typography>{story.data.mes}</Typography>
                      </Grid>
                      <Grid item container direction="column" xs={3}>
                        <Typography variant="button" align="center">
                          {story.relato.titulo}
                        </Typography>
                        <Typography variant="body2" align="justify">
                          {story.relato.texto}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <ButtonBase>
                          <img
                            src="wmo2.jpg"
                            alt="wmo2"
                            width="100"
                            height="100"
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid />
                    </Grid>
                  </OutlinedCard>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default storiesPage;
