import React from 'react';
import { makeStyles, TextField, Grid, Input } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Colors from '../../../shared/styles/Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  textField: {
    width: 430,
    // height: 'auto',
  },
  title: {
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
    color: Colors.Secondary,
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
          className={classes.title}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="Conte-me sobre teu dia :)"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
      </Grid>
      <Grid item style={{ alignSelf: 'flex-end' }}>
        <CardActions>
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
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
  );
}
