import React, { useEffect, useState } from 'react';
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

import ModifyProfile from './ModifyProfile';
import { Edit, Add } from '@material-ui/icons';

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
    '& .MuiButtonBase-root': {
      marginRight: '20px',
    },
  },
}));

const Contributions = ({ user }) => {
  const MODAL_TYPE = {
    EDIT: 'edit',
    ADD: 'add',
    DEFAULT: 'default',
  };
  const [contribution, setContribution] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(MODAL_TYPE.DEFAULT);
  const classes = useStyles();

  const fetchContribution = async () => {
    // let { data } = await supabase
    //   .from('kvk2_contribution')
    //   .select('*')
    //   .filter('userId', 'eq', user.uid);
    // if (data && data.length > 0) {
    //   setContribution(data[0]);
    // }
    setIsLoaded(true);
  };
  const numberWithCommas = (x) => {
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
            {contribution.governorId}
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
          onClick={() => setActiveModal(MODAL_TYPE.EDIT)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Add />}
          onClick={() => setActiveModal(MODAL_TYPE.ADD)}
        >
          Add Contribution
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
                  {numberWithCommas(contribution.t4KillPointsAtStart)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t5KillPointsAtStart)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.totalKillPointsAtStart)}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.deadCountAtStart)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Current
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t4KillPointsInEnd) || '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.t5KillPointsInEnd) || '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.totalKillPointsInEnd) ||
                    '-'}
                </TableCell>
                <TableCell align="right">
                  {numberWithCommas(contribution.deadCountInEnd) || '-'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return (
    <ModifyProfile
      user={user}
      setContribution={setContribution}
      contribution={contribution}
      setOnEdit={setOnEdit}
    />
  );
};

export default Contributions;
