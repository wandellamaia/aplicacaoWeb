import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography, Link } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import IconButton from '@material-ui/core/IconButton';

import * as utils from '../utils/index';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  buttonAttachments: {
    textTransform: 'none',
  },
  containerFiles: {
    width: '100%',
    margin: '8px 0',
  },
  iconTypeFiles: {
    marginRight: 12,
  },
  iconType: {
    width: 15,
  },
  descriptionFile: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  sizeFile: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  iconsActions: {
    width: 40,
    height: 40,
  },
});
const FileListItem = (props) => {
  const classes = useStyles();
  const { file, onDelete, disabled } = props;

  return (
    <Grid
      container
      justify="space-between"
      direction="row"
      className={classes.containerFiles}
    >
      <Grid item xs="auto">
        <Grid container>
          <Grid item xs="auto" className={classes.iconTypeFiles}>
            {file.type === 'image/jpeg' || file.type === 'image/png' ? (
              <CropOriginalIcon className={classes.iconType} />
            ) : (
              <DescriptionOutlinedIcon className={classes.iconType} />
            )}
          </Grid>
          <Grid item xs="auto">
            <Typography className={classes.descriptionFile}>
              {file.name}
            </Typography>
            <Typography className={classes.sizeFile}>
              {utils.changeByte(file.size)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs="auto">
        {file && file.link && (
          <Link href={file.link} target="_blank" rel="noreferrer">
            <IconButton className={classes.iconsActions}>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </Link>
        )}
        {onDelete && (
          <IconButton
            onClick={() => onDelete(file.name)}
            className={classes.iconsActions}
            disabled={disabled}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  disabled: PropTypes.bool,
};

FileListItem.defaultProps = {
  onDelete: undefined,
  disabled: false,
};
export default FileListItem;
