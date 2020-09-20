import React from 'react';
import { makeStyles, TextField, Grid, Input } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Colors from '../../../shared/styles/Colors';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 500,
  },
  title: {
    width: '70%',
  },
  button: {
    margin: theme.spacing(1),
    color: Colors.Secondary,
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ paddingBottom: 8 }}>
        <Input
          placeholder="Título"
          inputProps={{ 'aria-label': 'description' }}
        />
      </Grid>
      <Grid item conatiner justify="center" xs>
        <TextareaAutosize
          aria-label="minimum height"
          variant="outlined"
          rowsMin={10}
          placeholder="Conte-me sobre teu dia :)"
          style={{ width: 300 }}
        />
      </Grid>
      <Grid item container justify="center">
        <Grid item xs>
          <CardActions>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              multiple
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </CardActions>
        </Grid>
        <Grid item>
          <CardActions>
            <Button
              variant="contained"
              color={Colors.Primary}
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Grid>
  );
}
