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
import axios from 'axios';

import { MODAL_TYPE } from '../constants';

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
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ModifyProfile = ({
  user,
  setContribution,
  setActiveModal,
  contribution,
}) => {
  const defaultValues = contribution || {
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

  const classes = useStyles();

  const onSubmit = async ({ name, governorId, alliance }) => {
    setIsSubmitting(true);

    axios
      .post(
        `https://us-central1-kd2173-7f4dd.cloudfunctions.net/submission`,
        {
          name,
          governorId,
          alliance,
          userId: user.uid,
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
        <Button
          style={{ width: '100%' }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Save
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

export default ModifyProfile;
