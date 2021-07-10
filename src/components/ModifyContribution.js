import React, { useState } from 'react';
import { supabase } from '../lib/api';
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

import NumberField from './NumberField';

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
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ModifyContribution = ({
  user,
  setContribution,
  contribution,
  setOnEdit,
}) => {
  const defaultValues = contribution || {
    name: '',
    governor_id: '',
    alliance: '',
    t4_kill_points_at_start: '',
    t5_kill_points_at_start: '',
    total_kill_points_at_start: '',
    dead_count_at_start: '',
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    name,
    governor_id,
    alliance,
    t4_kill_points_at_start,
    t5_kill_points_at_start,
    total_kill_points_at_start,
    dead_count_at_start,
  }) => {
    setIsSubmitting(true);
    const inputs = {
      name,
      governor_id,
      alliance,
      t4_kill_points_at_start: formatNumber(t4_kill_points_at_start),
      t5_kill_points_at_start: formatNumber(t5_kill_points_at_start),
      total_kill_points_at_start: formatNumber(total_kill_points_at_start),
      dead_count_at_start: formatNumber(dead_count_at_start),
      user_id: user.id,
    };
    if (contribution) {
      let { data, error } = await supabase
        .from('kvk2_contribution')
        .update(inputs)
        .single();

      if (error) setAlert({ severity: 'error', text: error.message });
      else {
        setContribution(data);
        setAlert(null);
      }
    } else {
      let { data, error } = await supabase
        .from('kvk2_contribution')
        .insert(inputs)
        .match({ user_id: user.id });
      if (error) setAlert({ severity: 'error', text: error.message });
      else {
        setContribution(data[0]);
        setAlert(null);
      }
    }
    setIsSubmitting(false);
    setOnEdit(false);
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
          name="governor_id"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Governor ID"
              label="Governor ID"
              error={errors.governor_id}
              alert={errors.governor_id ? 'Governor ID is required' : ''}
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
        <Controller
          name="t4_kill_points_at_start"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="T4 Kill Points"
              label="T4 Kill Points"
              error={errors.t4_kill_points_at_start}
              alert={
                errors.t4_kill_points_at_start
                  ? 'T4 Kill Points is required'
                  : ''
              }
              helperText="Pre-KVK T4 Kill Points"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="t5_kill_points_at_start"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="T5 Kill Points"
              error={errors.t5_kill_points_at_start}
              alert={
                errors.t5_kill_points_at_start
                  ? 'T4 Kill Points is required'
                  : ''
              }
              helperText="Pre-KVK T5 Kill Points"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="total_kill_points_at_start"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Kill Points"
              label="Kill Points"
              error={errors.total_kill_points_at_start}
              alert={
                errors.total_kill_points_at_start
                  ? 'Kill Points is required'
                  : ''
              }
              helperText="Pre-KVK Kill Points"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
        <Controller
          name="dead_count_at_start"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              placeholder="Dead Count"
              label="Dead Count"
              error={errors.dead_count_at_start}
              alert={errors.dead_count_at_start ? 'Dead Count is required' : ''}
              helperText="Pre-KVK Dead Count"
              InputProps={{
                inputComponent: NumberField,
              }}
            />
          )}
        />
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

export default ModifyContribution;
