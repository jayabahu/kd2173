import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm, Controller } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { MODAL_TYPE } from '../constants';
import NumberField from './NumberField';
import axios from 'axios';
import ImageUpload from './ImageUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    maxWidth: '600px',
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: '20px',
    },
    '& .MuiButtonBase-root': {
      width: '100%',
    },
  },
  imageControl: {
    marginBottom: '20px',
    '& > img': {
      marginBottom: '20px',
    },
    '& > span': {
      display: 'block',
      marginTop: '-20px',
      marginBottom: '10px',
      fontSize: '16px',
    },
    '& > label': {
      display: 'block',
      marginBottom: '20px',
      fontSize: '18px',
      color: '#aeafb0',
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddContribution = ({ user, setContribution, setActiveModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  const [killPointScreenshotInEnd, setKillPointScreenshot] = useState(null);

  const classes = useStyles();

  const formatNumber = (number) =>
    typeof number === 'string' ? parseFloat(number.replace(/,/g, '')) : number;

  const onSubmit = async ({
    t4KillPointsInEnd,
    t5KillPointsInEnd,
    totalKillPointsInEnd,
    deadCountInEnd,
  }) => {
    setIsSubmitting(true);

    axios
      .post(
        `https://us-central1-kd2173-7f4dd.cloudfunctions.net/submission`,
        {
          killPointScreenshotInEnd,
          userId: user.uid,
          t4KillPointsInEnd: formatNumber(t4KillPointsInEnd),
          t5KillPointsInEnd: formatNumber(t5KillPointsInEnd),
          totalKillPointsInEnd: formatNumber(totalKillPointsInEnd),
          deadCountInEnd: formatNumber(deadCountInEnd),
        },
        { headers: { authorization: `Bearer ${user.token}` } }
      )
      .then(function (response) {
        if (response.data?.data) {
          setContribution(response.data.data);
          setAlert(null);
          setIsSubmitting(false);
          setActiveModal(MODAL_TYPE.DEFAULT);
        }
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(null);
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Guide Image</span>
        <img src={require('../assets/images/guide.jpg')} alt="Guide" />
        <Controller
          name="t4KillPointsInEnd"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="T4 Kill Points"
              label="T4 Kill Points"
              error={errors.t4KillPointsInEnd}
              alert={
                errors.t4KillPointsInEnd ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T4 Kill Points (1 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="t5KillPointsInEnd"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="T5 Kill Points"
              placeholder="T5 Kill Points"
              error={errors.t5KillPointsInEnd}
              alert={
                errors.t5KillPointsInEnd ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T5 Kill Points  (2 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="totalKillPointsInEnd"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Kill Points"
              label="Kill Points"
              error={errors.totalKillPointsInEnd}
              alert={
                errors.totalKillPointsInEnd ? 'Kill Points is required' : ''
              }
              helperText="Current Kill Points  (3 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="deadCountInEnd"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Dead Count"
              label="Dead Count"
              error={errors.deadCountInEnd}
              alert={errors.deadCountInEnd ? 'Dead Count is required' : ''}
              helperText="Current Dead Count"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <div className={classes.imageControl}>
          <label>Image with Name, ID and Kill Points</label>
          {!killPointScreenshotInEnd && (
            <>
              <span>Sample Image</span>
              <img
                src={require('../assets/images/kill-points.jpg')}
                alt="Name, ID and Kill Points"
              />
            </>
          )}
          <ImageUpload
            userId={user.uid}
            type="kill-points"
            image={killPointScreenshotInEnd}
            setImage={setKillPointScreenshot}
          />
        </div>
        <Button
          style={{ width: '100%' }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </Button>
        {alert && (
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alert.severity}>
              {alert.text}
            </Alert>
          </Snackbar>
        )}
      </form>
    </Container>
  );
};

export default AddContribution;
