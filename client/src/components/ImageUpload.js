import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, LinearProgress, Typography } from '@material-ui/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


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

function LinearProgressWithLabel(props) {
  return (
    <Box>
      <Box style={{ width: '100%', minHeight: '10px'}}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const ImageUpload = ({ userId, type, image, setImage }) => {
  const classes = useStyles();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadPercent, setUploadPercent] = useState(0);
  const storage = getStorage();

  const handleUploadClick = async (event) => {
    setIsUploading(true);
    setUploadPercent(0);
    const file = event.target.files[0];
    const imageUrl = `public/${userId}/${type}/${Math.round(
      +new Date() / 1000
    )}.jpg`;

    const storageRef = ref(storage, imageUrl);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      () => {
        const percent = uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100;
        setUploadPercent(percent)
      },
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          setIsUploading(false);
        });
      }
    );
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
                <LinearProgressWithLabel style={{ margin: '15px 0 -10px' }} value={uploadPercent}/>
              )}
            </CardContent>
          )}
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ImageUpload;
