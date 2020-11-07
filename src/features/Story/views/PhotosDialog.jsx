import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Tooltip,
  Typography,
  Divider,
  IconButton,
  Button,
  makeStyles,
  Dialog,
  Grid,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { PhotoCamera, Close } from '@material-ui/icons';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import FileListItem from '../../../shared/components/FileListItem';
import * as utils from '../../../shared/utils';
import Colors from '../../../shared/styles/Colors';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  input: {
    display: 'none',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  root: {
    minWidth: 400,
  },
  button: {
    margin: theme.spacing(1),
    color: Colors.Secondary,
  },
}));

const PhotosDialog = (props) => {
  const classes = useStyles();
  const { attachments, setAttachments, setBase } = props;
  const [open, setOpen] = useState(false);

  const changeBase64 = async () => {
    const base64 = await Promise.all(
      attachments.map((file) => {
        return utils.getBase64(file);
      })
    );
    setBase(base64);
  };

  const onDelete = useCallback(
    (prop) => {
      setAttachments((oldAttachments) =>
        oldAttachments.filter((i) => i.name !== prop)
      );
    },
    [setAttachments]
  );
  const handleChange = useCallback(
    async (event) => {
      const fileUploaded = Object.values(event.target.files);

      fileUploaded.forEach((element, index) => {
        if (index < 3 && attachments.length < 4) {
          const isDuplicated = attachments.findIndex(
            (attachmentFile) => attachmentFile.name === element.name
          );
          if (isDuplicated !== -1) {
            return setAttachments((oldAttachments) => [...oldAttachments]);
          }

          return setAttachments((oldAttachments) => [
            ...oldAttachments,
            element,
          ]);
        }
        return setAttachments((oldAttachments) => [...oldAttachments]);
      });
    },
    [attachments, setAttachments]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
    await changeBase64();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        className={classes.button}
        onClick={handleClickOpen}
        startIcon={<AddAPhotoIcon />}
      >
        Fotografias
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          className={classes.root}
          onClose={handleClose}
        >
          Seleção de fotos
        </DialogTitle>

        <DialogActions>
          <Tooltip title="Fotos">
            <Grid item container direction="column" justify="flex-start">
              <label htmlFor="icon-button-file">
                <input
                  accept="image/*"
                  multiple
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  onChange={handleChange}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
                <span>máx. 3 imagens</span>
              </label>
            </Grid>
          </Tooltip>
        </DialogActions>
        <DialogContent>
          {attachments && attachments.length > 0 && (
            <Grid>
              <Typography>Anexos:</Typography>
            </Grid>
          )}
          {attachments &&
            attachments.length > 0 &&
            attachments.map((attachment) => (
              <Grid key={attachment.name}>
                <FileListItem
                  file={attachment}
                  onDelete={onDelete}
                  disabled={false}
                />
                <Divider variant="middle" />
              </Grid>
            ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

PhotosDialog.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.object),
  setAttachments: PropTypes.func.isRequired,
  // base: PropTypes.arrayOf(PropTypes.object),
  setBase: PropTypes.func.isRequired,
};

PhotosDialog.defaultProps = {
  attachments: undefined,
  // base: undefined,
};

export default PhotosDialog;
