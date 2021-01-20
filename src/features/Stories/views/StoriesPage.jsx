import React, { useState } from 'react';
import { Grid, Typography, Card, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TuneIcon from '@material-ui/icons/Tune';
import Layout from '../../../shared/components/Layout';
import OutlinedCard from '../../../shared/components/OutlinedCard';
import mock from '../../../shared/utils/mockStories';
import Colors from '../../../shared/styles/Colors';
import ItemSelected from './ItemSelected';
import Item from './Item';

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
const StoriesPage = () => {
  // const classes = useStyles();
  const colors = ['pink', 'yellow', 'powderblue', 'coral', 'green'];
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
                />
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default StoriesPage;
