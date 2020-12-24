import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import Layout from '../../../shared/components/Layout';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import mock from '../../../shared/utils/mockStories';
import Colors from '../../../shared/styles/Colors';

const storiesPage = () => {
  const colors = ['pink', 'yellow', 'powderblue', 'coral', 'green'];
  return (
    <>
      <Layout />
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: 10 }}
      >
        <Grid item xs={11}>
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
                    <Grid item container justify="space-between">
                      <Grid
                        item
                        style={{ backgroundColor: colors[index % 5] }}
                        xs={1}
                      />
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
                        <Typography>{story.relato.titulo}</Typography>
                        <Typography>{story.relato.texto}</Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        xs={4}
                      >
                        <Typography>{story.fotos[0]}</Typography>
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
