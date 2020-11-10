import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Input,
  CardActions,
  Button,
  TextareaAutosize,
} from '@material-ui/core';
import { Save } from '@material-ui/icons';

import PropTypes from 'prop-types';
import Colors from '../../../shared/styles/Colors';
import * as storyOperations from '../controller/storyOperations';
import AlertDialog from './AlertDialog';
import PhotosDialog from './PhotosDialog';
import Loading from '../../../shared/components/LoadingPage';
import Message from '../../../shared/components/SuccessMessage';

// import * as utils from '../../../shared/utils';

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
  const {
    dataRelato,
    humor,
    setHumor,
    setDate,
    attachments,
    setAttachments,
    base,
    setBase,
  } = props;
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const clear = () => {
    setText('');
    setTitle('');
    setHumor('');
    setDate('');
  };

  const handleSave = async () => {
    setLoading(true);
    const id = await storyOperations.storyRegister({
      data_relato: dataRelato,
      humor,
      titulo: title,
      descricao: text,
    });

    if (base.length > 0 && base.length <= 3 && id)
      await storyOperations.saveDocuments({
        id: id.id,
        documents: base,
      });

    if (id?.message) {
      setMessage(id.message);
    } else {
      setOpen(true);
    }
    clear();
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
            <PhotosDialog
              setAttachments={setAttachments}
              attachments={attachments}
              base={base}
              setBase={setBase}
            />
          </CardActions>
          {attachments.length > 3 && (
            <Message
              message="Só é permitido enviar 3 fotografias"
              type="warning"
            />
          )}
        </Grid>
        <Grid item>
          <CardActions>
            <Button
              disabled={!(humor && text && dataRelato)}
              variant="outlined"
              size="small"
              className={classes.button}
              startIcon={<Save />}
              onClick={() => handleSave()}
            >
              Salvar
            </Button>
          </CardActions>
        </Grid>
        <Loading open={loading} />
        <AlertDialog open={open} setOpen={setOpen} />
        {message && <Message message={message} type="error" />}
      </Grid>
    </Grid>
  );
};
DescriptionCard.propTypes = {
  dataRelato: PropTypes.string.isRequired,
  humor: PropTypes.string.isRequired,
  setHumor: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  setAttachments: PropTypes.func.isRequired,
  attachments: PropTypes.arrayOf(PropTypes.object),
  base: PropTypes.arrayOf(PropTypes.object),
  setBase: PropTypes.func.isRequired,
};

DescriptionCard.defaultProps = {
  attachments: undefined,
  base: undefined,
};
export default DescriptionCard;
