import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../../../shared/components/Layout';
import OutlinedCard from '../../../shared/components/OutlinedCard';

const storiesPage = () => {
  return (
    <>
      <Layout />
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <OutlinedCard>
            <Grid item container justify="space-between">
              <Grid item style={{ backgroundColor: 'pink' }} xs={1} />
              <Grid
                item
                container
                direction="column"
                alignItems="center"
                xs={3}
              >
                <Typography>Qua</Typography>
                <Typography>14</Typography>
                <Typography>12</Typography>
              </Grid>
              <Grid item container direction="column" xs={3}>
                <Typography>Hoje é o dia</Typography>
                <Typography>
                  Eu posso quase tocar o silencio, a casa, vazia.
                </Typography>
              </Grid>
              <Grid item container justify="center" alignItems="center" xs={4}>
                <Typography>Fotos</Typography>
              </Grid>
              <Grid />
            </Grid>
          </OutlinedCard>
        </Grid>
      </Grid>
    </>
  );
};
export default storiesPage;
