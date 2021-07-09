import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/api';
import {
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { useForm } from 'react-hook-form';
import MuiAlert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
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

const Contributions = ({ user }) => {
  const [contribution, setContribution] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);
  const classes = useStyles();

  const fetchContribution = async () => {
    let { data } = await supabase
      .from('kvk2_contribution')
      .select('*')
      .filter('user_id', 'eq', user.id);
    if (data && data.length > 0) {
      setContribution(data[0]);
    }
    setIsLoaded(true);
  };

  const formatNumber = (number) => parseFloat(number.replace(/,/g, ''));

  const numberWithCommas = (x) =>
    x === null ? '-' : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const onSubmit = async ({
    name,
    governor_id,
    alliance,
    t4_kill_points_at_start,
    t5_kill_points_at_start,
    total_kill_points_at_start,
    dead_count_at_start,
  }) => {
    let { data, error } = await supabase
      .from('kvk2_contribution')
      .insert({
        name,
        governor_id,
        alliance,
        t4_kill_points_at_start: formatNumber(t4_kill_points_at_start),
        t5_kill_points_at_start: formatNumber(t5_kill_points_at_start),
        total_kill_points_at_start: formatNumber(total_kill_points_at_start),
        dead_count_at_start: formatNumber(dead_count_at_start),
        user_id: user.id,
      })
      .single();
    if (error) setAlert({ severity: 'error', text: error.message });
    else {
      setContribution(data);
      setAlert(null);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(null);
  };

  useEffect(() => {
    fetchContribution();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded) {
    return <CircularProgress />;
  }

  if (contribution) {
    return (
      <div className={classes.userRoot}>
        <div>
          <div>
            <strong>Name:&nbsp;</strong>
            {contribution.name}
          </div>
          <div>
            <strong>Governor ID:&nbsp;</strong>
            {contribution.governor_id}
          </div>
          <div>
            <strong>Alliance:&nbsp;</strong>
            {contribution.alliance}
          </div>
        </div>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">T4 Kill Points</TableCell>
                <TableCell align="right">T5 Kill Points</TableCell>
                <TableCell align="right">Kill Points</TableCell>
                <TableCell align="right">Dead Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Pre KVK
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t4_kill_points_at_start)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t5_kill_points_at_start)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.total_kill_points_at_start)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.dead_count_at_start)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Post KVK
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t4_kill_points_in_end) || '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t5_kill_points_in_end) || '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.total_kill_points_in_end) ||
                    '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.dead_count_in_end) || '-'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name', { required: true })}
          placeholder="Name"
          label="Name"
          error={errors.name}
          alert={errors.name ? 'Name is required' : ''}
        />
        <TextField
          {...register('governor_id', { required: true })}
          placeholder="Governor ID"
          label="Governor ID"
          error={errors.governor_id}
          alert={errors.governor_id ? 'Governor ID is required' : ''}
        />
        <FormControl
          className={classes.formControl}
          error={errors.alliance !== undefined}
        >
          <InputLabel id="alliance">Alliance</InputLabel>
          <Select
            labelId="alliance"
            {...register('alliance', { required: true })}
          >
            <MenuItem value="CL">CL</MenuItem>
            <MenuItem value="EngS">EngS</MenuItem>
            <MenuItem value="EngX">EngX</MenuItem>
            <MenuItem value="PL">PL</MenuItem>
            <MenuItem value="SD">SD</MenuItem>
            <MenuItem value="VN">VN</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {errors.alliance ? (
            <FormHelperText>Alliance is required.</FormHelperText>
          ) : null}
        </FormControl>
        <TextField
          {...register('t4_kill_points_at_start', { required: true })}
          placeholder="T4 Kill Points"
          label="T4 Kill Points"
          error={errors.t4_kill_points_at_start}
          alert={
            errors.t4_kill_points_at_start ? 'T4 Kill Points is required' : ''
          }
          helperText="Pre-KVK T4 Kill Points"
          InputProps={{
            inputComponent: NumberField,
          }}
        />
        <TextField
          {...register('t5_kill_points_at_start', { required: true })}
          placeholder="T5 Kill Points"
          label="T5 Kill Points"
          error={errors.t5_kill_points_at_start}
          alert={
            errors.t5_kill_points_at_start ? 'T4 Kill Points is required' : ''
          }
          helperText="Pre-KVK T5 Kill Points"
          InputProps={{
            inputComponent: NumberField,
          }}
        />
        <TextField
          {...register('total_kill_points_at_start', { required: true })}
          placeholder="Kill Points"
          label="Kill Points"
          error={errors.total_kill_points_at_start}
          alert={
            errors.total_kill_points_at_start ? 'Kill Points is required' : ''
          }
          helperText="Pre-KVK Kill Points"
          InputProps={{
            inputComponent: NumberField,
          }}
        />
        <TextField
          {...register('dead_count_at_start', { required: true })}
          placeholder="Dead Count"
          label="Dead Count"
          error={errors.dead_count_at_start}
          alert={errors.dead_count_at_start ? 'Dead Count is required' : ''}
          helperText="Pre-KVK Dead Count"
          InputProps={{
            inputComponent: NumberField,
          }}
        />
        <Button
          style={{ width: '100%' }}
          variant="contained"
          color="primary"
          type="submit"
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

export default Contributions;
