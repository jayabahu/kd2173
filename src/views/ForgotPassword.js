import React, { useState } from 'react';
import { supabase } from '../lib/api';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { IS_DEVELOPMENT } from '../lib/constants';

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

const ForgotPassword = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Forgot your password?',
    paragraph: '',
  };

  const onSubmit = async ({ email }) => {
    setIsSubmitted(true);

    const { error, data } = await supabase.auth.api.resetPasswordForEmail(
      email,
      {
        redirectTo: IS_DEVELOPMENT
          ? 'http://localhost:3000/reset-password'
          : 'https://rok2173.com/reset-password',
      }
    );

    if (error) {
      setAlert({ severity: 'error', text: error.message });
    } else if (data && !error) {
      setIsCompleted(true);
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
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Container className={classes.root}>
            {isCompleted ? (
              <Alert severity="success">
                Check your email inbox or spam folder to get the password reset
                link
              </Alert>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register('email', { required: true })}
                  placeholder="Email Address"
                  label="Email Address"
                  error={errors.email}
                  alert={errors.email ? 'This field is required' : ''}
                  type="email"
                />
                <br />
                <Button
                  style={{ width: '100%' }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitted}
                >
                  Reset Password
                </Button>
                {alert && (
                  <Snackbar
                    open={true}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={alert.severity}>
                      {alert.text}
                    </Alert>
                  </Snackbar>
                )}
              </form>
            )}
          </Container>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
