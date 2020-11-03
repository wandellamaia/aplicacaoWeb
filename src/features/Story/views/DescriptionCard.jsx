import React, { useState } from 'react';
import { makeStyles, Grid, Input } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import PropTypes from 'prop-types';
import Colors from '../../../shared/styles/Colors';
import * as storyOperations from '../controller/storyOperations';
import AlertDialog from './AlertDialog';
import Loading from '../../../shared/components/LoadingPage';
import SuccessMessage from '../../../shared/components/SuccessMessage';

import * as utils from '../../../shared/utils';

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

const DescriptionCard = (props) => {
  const classes = useStyles();
  const { dataRelato, humor, attachments, setAttachments } = props;
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const handleChange = async (event) => {
    const fileUploaded = Object.values(event.target.files);

    const base = await Promise.all(
      fileUploaded.map((file) => {
        return utils.getBase64(file);
      })
    );
    return setAttachments(base);
  };

  const handleSave = async () => {
    setLoading(true);
    const id = await storyOperations.storyRegister({
      data_relato: dataRelato,
      humor,
      titulo: title,
      descricao: text,
    });

    if (attachments.length && id)
      await storyOperations.saveDocuments({
        id: id.id,
        documents: attachments,
      });

    if (id?.message) {
      setMessage(id.message);
    } else {
      setOpen(true);
    }
    setLoading(false);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ paddingBottom: 8 }}>
        <Input
          placeholder="Título"
          inputProps={{ 'aria-label': 'description' }}
          onBlur={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs>
        <TextareaAutosize
          aria-label="minimum height"
          variant="outlined"
          rowsMin={10}
          placeholder="Conte-me sobre teu dia :)"
          style={{ width: 300 }}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item container justify="center">
        <Grid item xs>
          <CardActions>
            <input
              accept="image/*"
              multiple
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={handleChange}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
              <span>máx. 3 imagens</span>
            </label>
          </CardActions>
        </Grid>
        <Grid item>
          <CardActions>
            <Button
              disabled={!(humor && text && dataRelato)}
              variant="contained"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => handleSave()}
            >
              Save
            </Button>
          </CardActions>
        </Grid>
        <Loading open={loading} />
        <AlertDialog open={open} setOpen={setOpen} />
        {message && <SuccessMessage message={message} type="error" />}
      </Grid>
    </Grid>
  );
};
DescriptionCard.propTypes = {
  dataRelato: PropTypes.string.isRequired,
  humor: PropTypes.string.isRequired,
  setAttachments: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(PropTypes.object),
};

DescriptionCard.defaultProps = {
  attachments: undefined,
};
export default DescriptionCard;
