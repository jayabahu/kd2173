import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, LinearProgress } from '@material-ui/core';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { supabase } from '../lib/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  input: {
    display: 'none',
  },
  deleteBtn: {
    width: 'auto !important',
    float: 'right',
  },
  button: {
    width: 'auto !important',
    '& .MuiFab-label': {
      padding: '0 13px',
    },
  },
}));

const ImageUpload = ({ userId, type, image, setImage }) => {
  const classes = useStyles();
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = async (event) => {
    setIsUploading(true);
    const file = event.target.files[0];
    const imageUrl = `public/${userId}/${type}/${Math.round(
      +new Date() / 1000
    )}.jpg`;
    supabase.storage
      .from('upload')
      .upload(imageUrl, file)
      .then(({ data, error }) => {
        if (data) {
          const { publicURL } = supabase.storage
            .from('upload')
            .getPublicUrl(imageUrl);
          setImage(publicURL);
        }
        setIsUploading(false);
      });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Card>
          {image ? (
            <CardContent>
              <IconButton
                onClick={() => setImage(null)}
                color="secondary"
                className={classes.deleteBtn}
              >
                <DeleteForeverIcon />
              </IconButton>
              <img width="100%" src={image} alt={type} />
            </CardContent>
          ) : (
            <CardContent>
              <Grid container justify="center" alignItems="center">
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleUploadClick}
                  disabled={isUploading}
                />
                <label htmlFor="contained-button-file">
                  <Fab
                    component="span"
                    className={classes.button}
                    disabled={isUploading}
                  >
                    <AddPhotoAlternateIcon />
                  </Fab>
                </label>
              </Grid>
              {isUploading && (
                <LinearProgress style={{ margin: '15px 0 -10px' }} />
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ImageUpload;
