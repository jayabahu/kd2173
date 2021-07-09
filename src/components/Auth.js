import React, { useState } from 'react';
import { supabase } from '../lib/api';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '15px',
    maxWidth: '600px',
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiButtonBase-root': {
      width: '100%',
    },
  },
}));

const Auth = () => {
  const classes = useStyles();

  const [alert, setAlert] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email }) => {
    const { user, error } = await supabase.auth.signIn({ email });

    if (error) {
      setAlert({ severity: 'error', text: error.message });
    } else if (!user && !error) {
      setIsCompleted(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(null);
  };

  return (
    <Container className={classes.root}>
      {isCompleted ? (
        <Alert severity="success">
          An email has been sent to you for verification!
        </Alert>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ width: '100%' }}>
            <TextField
              {...register('email', { required: true })}
              placeholder="Email Address"
              label="Email Address"
              error={errors.email}
              alert={errors.email ? 'This field is required' : ''}
              type="email"
            />
          </div>
          <br />
          <Button
            style={{ width: '100%' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          {alert && (
            <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity={alert.severity}>
                {alert.text}
              </Alert>
            </Snackbar>
          )}
        </form>
      )}
    </Container>
  );
};

export default Auth;
