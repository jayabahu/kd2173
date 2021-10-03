import React, { useState } from 'react';
import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm, Controller } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { MODAL_TYPE } from '../constants';
import NumberField from './NumberField';
import ImageUpload from './ImageUpload';
import axios from 'axios';

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
  formControl: {
    width: '100%',
    marginBottom: '20px',
  },
  user: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  userRoot: {
    padding: theme.spacing(3),
    '& .MuiTableCell-root': {
      padding: '16px',
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

const SetupProfile = ({ user, setContribution, setActiveModal }) => {
  const defaultValues = {
    name: '',
    governorId: '',
    alliance: '',
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [alert, setAlert] = useState(null);
  const [killPointScreenshot, setKillPointScreenshot] = useState(null);

  const classes = useStyles();

  const formatNumber = (number) =>
    typeof number === 'string' ? parseFloat(number.replace(/,/g, '')) : number;

  const onSubmit = async ({
    name,
    governorId,
    alliance,
    t4KillPointsAtStart,
    t5KillPointsAtStart,
    totalKillPointsAtStart,
    deadCountAtStart,
  }) => {
    setIsSubmitting(true);

    axios
      .post(
        `https://us-central1-kd2173-7f4dd.cloudfunctions.net/submission`,
        {
          name,
          governorId,
          alliance,
          killPointScreenshot,
          userId: user.uid,
          t4KillPointsAtStart: formatNumber(t4KillPointsAtStart),
          t5KillPointsAtStart: formatNumber(t5KillPointsAtStart),
          totalKillPointsAtStart: formatNumber(totalKillPointsAtStart),
          deadCountAtStart: formatNumber(deadCountAtStart),
        },
        {headers: {authorization: `Bearer ${user.token}`}}
      )
      .then(function (response) {
        if (response.data?.data) {
          setContribution(response.data.data);
          setAlert(null);
          setIsSubmitting(false);
          setActiveModal(MODAL_TYPE.DEFAULT);
        }
      })
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
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Name"
              label="Name"
              error={errors.name}
              alert={errors.name ? 'Name is required' : ''}
            />
          )}
        />
        <Controller
          name="governorId"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Governor ID"
              label="Governor ID"
              error={errors.governorId}
              alert={errors.governorId ? 'Governor ID is required' : ''}
            />
          )}
        />
        <FormControl
          className={classes.formControl}
          error={errors.alliance !== undefined}
        >
          <InputLabel id="alliance">Alliance</InputLabel>
          <Controller
            name="alliance"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select labelId="alliance" value={value} onChange={onChange}>
                <MenuItem value="CL">CL</MenuItem>
                <MenuItem value="EngS">EngS</MenuItem>
                <MenuItem value="EngX">EngX</MenuItem>
                <MenuItem value="PL">PL</MenuItem>
                <MenuItem value="SD">SD</MenuItem>
                <MenuItem value="VN">VN</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            )}
          />

          {errors.alliance ? (
            <FormHelperText>Alliance is required.</FormHelperText>
          ) : null}
        </FormControl>
        <span>Guide Image</span>
        <img src={require('../assets/images/guide.jpg')} alt="Guide" />
        <Controller
          name="t4KillPointsAtStart"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="T4 Kill Points"
              label="T4 Kill Points"
              error={errors.t4KillPointsAtStart}
              alert={
                errors.t4KillPointsAtStart ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T4 Kill Points (1 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="t5KillPointsAtStart"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="T5 Kill Points"
              placeholder="T5 Kill Points"
              error={errors.t5KillPointsAtStart}
              alert={
                errors.t5KillPointsAtStart ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T5 Kill Points  (2 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="totalKillPointsAtStart"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Kill Points"
              label="Kill Points"
              error={errors.totalKillPointsAtStart}
              alert={
                errors.totalKillPointsAtStart ? 'Kill Points is required' : ''
              }
              helperText="Current Kill Points  (3 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="deadCountAtStart"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Dead Count"
              label="Dead Count"
              error={errors.deadCountAtStart}
              alert={errors.deadCountAtStart ? 'Dead Count is required' : ''}
              helperText="Current Dead Count"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <div className={classes.imageControl}>
          <label>Image with Name, ID and Kill Points</label>
          {!killPointScreenshot && (
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
            image={killPointScreenshot}
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

export default SetupProfile;
