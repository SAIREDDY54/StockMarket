import React, { Component } from 'react';
import { Typography, Grid, Paper, Tabs, Tab, Box } from '@material-ui/core'
import { HashRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../layout/Header'
import PropTypes from 'prop-types';

const useStyles = (theme) => ({
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
});

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


class Orders extends Component {
  state = {
    value: 0
  }
  handleChange = (event, newValue) => {
      this.setState({value: newValue})
    };
  render() {
    const {classes} = this.props;
    
    return (
      <div>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
          <Grid item xs={9}>
            <div className={classes.root}>
              <AntTabs value={this.state.value} onChange={this.handleChange} aria-label="ant example">
                <AntTab label="Stocks" {...a11yProps(0)} />
                <AntTab label="Mutual Funds" {...a11yProps(1)} />
                <AntTab label="Fixed Deposits" {...a11yProps(2)} />
                <AntTab label="Gold" {...a11yProps(3)} />
                <AntTab label="US Stocks" {...a11yProps(4)} />
              </AntTabs>
            </div>
            <TabPanel value={this.state.value} index={0}>Item One</TabPanel>
            <TabPanel value={this.state.value} index={1}>Item two</TabPanel>
            <TabPanel value={this.state.value} index={2}>Item three</TabPanel>
            <TabPanel value={this.state.value} index={3}>Item four</TabPanel>
            <TabPanel value={this.state.value} index={4}>Item five</TabPanel>
          </Grid>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Orders);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}