import React from 'react';
import {
  makeStyles,
  Grid,
  Card,
  IconButton,
  Typography,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import history from '../../../shared/history';
import DescriptionCard from './DescriptionArea';
import SelectHumor from './SelectHumor';
import Layout from '../../../shared/components/Layout';
import Colors from '../../../shared/styles/Colors';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: '30px',
    marginTop: '10px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  textField: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 1.6,
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
            <IconButton
              onClick={() => {
                history.push('/Login');
              }}
            >
              <ArrowBackIosOutlinedIcon aria-label="delete" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography className={classes.textHeader}>Relatos</Typography>
          </Grid>
          <Grid item />
        </Grid>
      </Layout>
      <Grid
        container
        item
        justify="center"
        style={{
          paddingTop: 16,
          background: Colors.IntermediateSecondary,
          height: 560,
        }}
      >
        <Grid item>
          <Card>
            <Grid container item justify="center">
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
              <Grid item>
                <img alt="w1" src="wakanda1.jpg" style={{ height: 100 }} />
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
