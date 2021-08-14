import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm, Controller } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import NumberField from './NumberField';
import ImageUpload from './ImageUpload';

import { MODAL_TYPE } from '../constants';

import { supabase } from '../lib/api';

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

const AddContribution = ({ user, setContribution, setActiveModal }) => {
  const defaultValues = {
    t4_kill_points_in_end: '',
    t5_kill_points_in_end: '',
    total_kill_points_in_end: '',
    dead_count_in_end: '',
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [killPointScreenshot, setKillPointScreenshot] = useState(null);
  const [otherKingdomKillsScreenshot, setOtherKingdomKillsScreenshot] =
    useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  const [alert, setAlert] = useState(null);
  const classes = useStyles();

  const formatNumber = (number) =>
    typeof number === 'string' ? parseFloat(number.replace(/,/g, '')) : number;

  const onSubmit = async ({
    t4_kill_points_in_end,
    t5_kill_points_in_end,
    total_kill_points_in_end,
    dead_count_in_end,
  }) => {
    if (!killPointScreenshot || !otherKingdomKillsScreenshot) {
      setAlert({ severity: 'error', text: 'Screenshots are required.' });
      return;
    }
    setIsSubmitting(true);
    let { data, error } = await supabase
      .from('kvk2_contribution')
      .update({
        t4_kill_points_in_end: formatNumber(t4_kill_points_in_end),
        t5_kill_points_in_end: formatNumber(t5_kill_points_in_end),
        total_kill_points_in_end: formatNumber(total_kill_points_in_end),
        dead_count_in_end: formatNumber(dead_count_in_end),
        kill_point_screenshot: killPointScreenshot,
        other_kd_kills_screenshot: otherKingdomKillsScreenshot,
      })
      .eq('user_id', user.id)
      .single();
    await supabase
      .from('kvk2_submissions')
      .insert({
        t4_kill_points: formatNumber(t4_kill_points_in_end),
        t5_kill_points: formatNumber(t5_kill_points_in_end),
        total_kill_points: formatNumber(total_kill_points_in_end),
        dead_count: formatNumber(dead_count_in_end),
        user_id: user.id,
        kill_point_screenshot: killPointScreenshot,
        other_kd_kills_screenshot: otherKingdomKillsScreenshot,
      })
      .single();
    if (error) setAlert({ severity: 'error', text: error.message });
    else {
      setContribution(data);
      setAlert(null);
    }

    setIsSubmitting(false);
    setActiveModal(MODAL_TYPE.DEFAULT);
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
          name="t4_kill_points_in_end"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="T4 Kill Points"
              label="T4 Kill Points"
              error={errors.t4_kill_points_in_end}
              alert={
                errors.t4_kill_points_in_end ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T4 Kill Points (1 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="t5_kill_points_in_end"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="T5 Kill Points"
              placeholder="T5 Kill Points"
              error={errors.t5_kill_points_in_end}
              alert={
                errors.t5_kill_points_in_end ? 'T4 Kill Points is required' : ''
              }
              helperText="Current T5 Kill Points  (2 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="total_kill_points_in_end"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Kill Points"
              label="Kill Points"
              error={errors.total_kill_points_in_end}
              alert={
                errors.total_kill_points_in_end ? 'Kill Points is required' : ''
              }
              helperText="Current Kill Points  (3 in guide image)"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="dead_count_in_end"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Dead Count"
              label="Dead Count"
              error={errors.dead_count_in_end}
              alert={errors.dead_count_in_end ? 'Dead Count is required' : ''}
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
            userId={user.id}
            type="kill-points"
            image={killPointScreenshot}
            setImage={setKillPointScreenshot}
          />
        </div>
        <div className={classes.imageControl}>
          <label>Killed or severely wounded units from other kingdoms</label>
          {!otherKingdomKillsScreenshot && (
            <>
              <span>Sample Image</span>
              <img
                src={require('../assets/images/other-kingdom-kills.jpg')}
                alt="Killed or severely wounded units from other kingdoms"
              />
            </>
          )}
          <ImageUpload
            userId={user.id}
            type="other-kingdom-killed-troops"
            image={otherKingdomKillsScreenshot}
            setImage={setOtherKingdomKillsScreenshot}
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
