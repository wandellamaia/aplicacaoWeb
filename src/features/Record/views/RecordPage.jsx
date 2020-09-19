import React from 'react';
import {
  makeStyles,
  Grid,
  Card,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

import history from '../../../shared/history';
import DescriptionCard from './DescriptionCard';
import SelectHumor from './SelectHumor';
import Layout from '../../../shared/components/Layout';
import CarouselPhotos from './CarouselPhotos';
import Colors from '../../../shared/styles/Colors';
import * as logout from '../control/RecordOperations';

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
  avatar: {
    backgroundColor: Colors.IntermediateSecondary,
    color: Colors.Secondary,
  },
}));

export default function RecordPage() {
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
            <Typography className={classes.textHeader}>Relatos</Typography>
          </Grid>
          <Grid item>
            <Avatar classeName={classes.avatar}>N</Avatar>
          </Grid>
          <Grid item>
            <IconButton onClick={() => logout.clearUser()}>
              <ExitToAppIcon />
            </IconButton>
            <Grid item>
              <IconButton onClick={() => history.push('/')}>
                <HomeIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
      <Grid
        container
        item
        justify="center"
        style={{
          paddingTop: 16,
          height: '100vh',
        }}
      >
        <Grid item>
          <Card>
            <Grid container item justify="center" style={{ paddingBottom: 16 }}>
              <Grid item style={{ marginRight: 100, marginLeft: 50 }}>
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
              <Grid item style={{ marginLeft: 100, marginRight: 50 }}>
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
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
