import React, { useState } from 'react';
import { Grid, Typography, Card, CardActionArea } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import Layout from '../../../shared/components/Layout';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import mock from '../../../shared/utils/mockStories';
import Colors from '../../../shared/styles/Colors';
import ItemSelected from './ItemSelected';
import Item from './Item';

const StoriesPage = () => {
  const [option, setOption] = useState({});
  console.log('componente principal ->', option);
  return (
    <>
      <Layout />
      <Grid container justify="space-between" style={{ marginTop: 10 }}>
        <Grid item container justify="center" alignItems="center" xs={7}>
          <Grid item xs={7}>
            <OutlinedCard>
              <ItemSelected option={option} />
            </OutlinedCard>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item style={{ marginBottom: 10 }}>
            <Card>
              <CardActionArea>
                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                >
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
              </CardActionArea>
            </Card>
          </Grid>
          {mock &&
            mock.map((story, index) => {
              return (
                <Item
                  story={story}
                  index={index}
                  option={option}
                  setOption={setOption}
                  key={story.relato.titulo+index.toString()}
                />
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default StoriesPage;
