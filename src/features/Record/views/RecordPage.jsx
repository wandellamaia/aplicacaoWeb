import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import DescriptionCard from './DescriptionCard';
import SelectHumor from './SelectHumor';

import CarouselPhotos from './CarouselPhotos';

import RecordMenu from './RecordMenu';

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
  exitButton: {},
}));

export default function RecordPage() {
  const classes = useStyles();

  return (
    <>
      <RecordMenu />
      <Grid container item justify="center" alignItems="center">
        <Grid item xs={9}>
          <Paper elevation="3" variant="elevation">
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ paddingBottom: 16 }}
            >
              <Grid item container justify="center" xs={9} sm={3}>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  style={{ paddingTop: 16 }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item container justify="center" xs={8} sm={4}>
                <SelectHumor className={classes.textField} />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                xs
                style={{
                  marginBottom: 50,
                }}
              >
                <CarouselPhotos backgroundColor="grey" />
              </Grid>
              <Grid item>
                <DescriptionCard />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
