import React, { useState } from 'react';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
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

const ResetPassword = ({
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
    title: 'Set your new password',
    paragraph: '',
  };

  const onSubmit = async ({ password }) => {
    setIsSubmitted(true);

    // const { error, data } = await supabase.auth.update({ password });

    // if (error) {
    //   setAlert({ severity: 'error', text: error.message });
    // } else if (data && !error) {
    //   setIsCompleted(true);
    // }
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
              <div>
                <Alert severity="success">Password is Updated</Alert>
                <br />
                <br />
                <Link to="/dashboard">Go Back to Dashboard</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register('password', { required: true })}
                  placeholder="New Password"
                  label="New Password"
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
                  Set Password
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

export default ResetPassword;
