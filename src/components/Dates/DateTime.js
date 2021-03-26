import React from 'react';
import Moment from 'react-moment';
import { Typography } from '@material-ui/core';

const DateTime = () => {
  const time = new Date();
  return (
    <div>
      <Typography color="textSecondary">
        {' '}
        <Moment format="MMMM Do YYYY">{time}</Moment>
      </Typography>
    </div>
  );
};

export default DateTime;
