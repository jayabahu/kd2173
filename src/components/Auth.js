import React, { useState } from 'react';
import { supabase } from '../lib/api';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '15px',
    maxWidth: '600px',
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: '15px',
    },
    '& .MuiButtonBase-root': {
      width: '100%',
    },
  },
}));

const Auth = () => {
  const classes = useStyles();

  const [alert, setAlert] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email, password }) => {
    setIsSubmitted(true);

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signIn({ email, password });

    if (error) {
      setAlert({ severity: 'error', text: error.message });
    }
    setIsSubmitted(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(null);
  };

  return (
    <Container className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', { required: true })}
          placeholder="Email Address"
          label="Email Address"
          error={errors.email}
          alert={errors.email ? 'This field is required' : ''}
          type="email"
        />
        <TextField
          {...register('password', { required: true })}
          placeholder="Password"
          label="Password"
          error={errors.password}
          alert={errors.password ? 'This field is required' : ''}
          type="password"
        />
        <br />
        <Button
          style={{ width: '100%' }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitted}
        >
          {isSignUp ? 'Register' : 'Login'}
        </Button>
        <br />
        <br />
        <span>
          {isSignUp ? 'Already have an account?' : "Doesn't have an account?"}
        </span>
        <br />
        <br />
        <Button
          style={{ width: '100%' }}
          variant="outlined"
          color="primary"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Switch to Login' : 'Create a Account'}
        </Button>
        <br />
        <br />
        <div>
          Forgot you password? <Link to="/forgot-password">Reset Password</Link>
        </div>
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

export default Auth;
