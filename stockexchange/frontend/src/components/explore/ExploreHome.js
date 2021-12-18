import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Grid, Paper, Tabs, Tab} from '@material-ui/core'
import MutualFunds from './MutualFunds';
import Stocks from './Stocks';
import Header from '../layout/Header';
import FixedDeposits from './FixedDeposits';
import Gold from './Gold';
import USStocks from './USStocks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 80,
    alignItems: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(5),
    },
  },
  link: {
    color: '#727272',
    textDecoration: "none",
    padding: 5, 
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "sans-serif",
    "&$visited": {
      color: "#85AC93"
    }
  }
}));

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontSize: 18,
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const ExploreHome = () => {
  const classes = useStyles();
  let {path, url} = useRouteMatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <div>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
          <Grid item xs={9}>
            <div className={classes.root}>
              <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="Stocks" component={Link} to={`${url}/stocks`} />
                <AntTab label="Mutual Funds" component={Link} to={`${url}/mutual-funds`} />
                <AntTab label="Fixed Deposits" component={Link} to={`${url}/fixed-deposits`} />
                <AntTab label="Gold" component={Link} to={`${url}/gold`} />
                <AntTab label="US Stocks" component={Link} to={`${url}/usstocks`} />
              </AntTabs>
            </div>
            <Switch>
              <Route exact path={`${path}/`} render={() => {return (<Redirect to={`${path}/stocks`} /> )}} />
              <Route exact path={`${path}/stocks`} component={Stocks} />
              <Route exact path={`${path}/mutual-funds`} component={MutualFunds} />
              <Route exact path={`${path}/fixed-deposits`} component={FixedDeposits} />
              <Route exact path={`${path}/gold`} component={Gold} />
              <Route exact path={`${path}/usstocks`} component={USStocks} />
            </Switch>
          </Grid>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
        </Grid>
        
      </div>
    )
  }

export default ExploreHome;
