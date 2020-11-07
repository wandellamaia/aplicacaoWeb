import React, { useState } from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import DescriptionCard from './DescriptionCard';
import SelectHumor from './SelectHumor';

import CarouselPhotos from './Carousel';

import RecordMenu from './StoryMenu';

const useStyles = makeStyles((theme) => ({
  textHeader: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 800,
    lineHeight: '1.5',
    marginLeft: 250,
  },
  textField: {
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 1.6,
  },
  date: {
    paddingTop: 25,
    paddingBottom: 0,
  },
}));

const RecordPage = (props) => {
  const classes = useStyles();

  const [date, setDate] = useState('');
  const [humor, setHumor] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [base, setBase] = useState([]);

  const handleHumor = (event) => {
    setHumor(event.target.value);
  };
  return (
    <>
      <RecordMenu />
      <Grid container item justify="center" alignItems="center">
        <Grid item xs="auto" sm={7} style={{ paddingTop: 50 }}>
          <Paper elevation={3} variant="elevation">
            <Grid
              container
              justify="space-between"
              style={{ paddingBottom: 16 }}
            >
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={5}
              >
                <TextField
                  id="date"
                  type="date"
                  defaultValue="2020-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.date}
                  onBlur={(e) => setDate(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={5}
                style={{ paddingTop: 10 }}
              >
                <SelectHumor humor={humor} handleHumor={handleHumor} />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {base.length > 0 && (
                <Grid
                  item
                  xs
                  style={{
                    marginBottom: 50,
                  }}
                >
                  <CarouselPhotos attachments={base} backgroundColor="grey" />
                </Grid>
              )}
              <Grid item>
                <DescriptionCard
                  dataRelato={date}
                  humor={humor}
                  setAttachments={setAttachments}
                  attachments={attachments}
                  base={base}
                  setBase={setBase}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default RecordPage;
