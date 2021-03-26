import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import Moment from 'react-moment';
import DateTime from '../Dates/DateTime';

const time = new Date();
const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return 'loading...';
  }

  return (
    <div className={styles.container}>
      <Typography
        gutterBottom
        variant='h4'
        component='h2'
        className={cx(styles.text)}
      >
        Global Covid-19 Cases Stats
      </Typography>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>

            <DateTime />
            <Typography variant='body2'>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {' '}
              <Moment format='MMMM Do YYYY'>{time}</Moment>
            </Typography>
            <Typography variant='body2'>
              Number of recovered cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {' '}
              <Moment format='MMMM Do YYYY'>{time}</Moment>
            </Typography>
            <Typography variant='body2'>
              Number of deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
