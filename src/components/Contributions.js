import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/api';
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ModifyContribution from './ModifyContribution';
import { Edit } from '@material-ui/icons';

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

const Contributions = ({ user }) => {
  const [contribution, setContribution] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
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
  const numberWithCommas = (x) => {
    console.log(x);
    return !x ? '-' : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetchContribution();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded) {
    return <CircularProgress />;
  }

  if (contribution && !onEdit) {
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
        <Button
          variant="contained"
          color="primary"
          startIcon={<Edit />}
          onClick={() => setOnEdit(!onEdit)}
        >
          Edit
        </Button>
        <br />
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
    <ModifyContribution
      user={user}
      setContribution={setContribution}
      contribution={contribution}
      setOnEdit={setOnEdit}
    />
  );
};

export default Contributions;
