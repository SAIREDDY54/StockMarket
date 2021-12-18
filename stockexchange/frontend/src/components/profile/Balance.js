import React, { Component } from 'react';
import { Typography, Grid, Paper, Tabs, Tab, Box, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AttachMoney, AccountBalanceWallet } from '@material-ui/icons'
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


class Balance extends Component {
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
                <AntTab label="INR Balance" {...a11yProps(0)} />
                <AntTab label="USD Balance" {...a11yProps(1)} />
              </AntTabs>
            </div>
            <TabPanel value={this.state.value} index={0}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Typography style={{marginTop: 80, color: "#727272", fontWeight: "bold"}}>Invest faster with Balance</Typography>
                <Typography style={{marginTop: 20, color: "#727272"}}>No bank login, no OTP, no waiting - Add money now!</Typography>
                <AccountBalanceWallet style={{color: "#00d09c", height: 200, width: 200, marginTop: 20}} />
                <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, marginTop: 20}}>start investing</Button>
              </div>
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              <Grid container spacing={5} style={{alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Grid item xs={3}>
                  <AttachMoney style={{color: "#00d09c", height: 240, width: 240, marginTop: 80}} />
                </Grid>
                <Grid item xs={4}>
                    <Typography style={{marginTop: 80, color: "#727272", fontWeight: "bold"}}>Unlock US stocks</Typography>
                    <Typography style={{marginTop: 20, color: "#727272"}}>USD Balance can be used only after unlocking US stocks.</Typography>
                    <Typography style={{marginTop: 20, color: "#727272"}}>Unlock as soon as possible to Invest in world famous companies</Typography>
                    <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', height: 50, width: 250, marginTop: 20}}>explore us stocks</Button>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
          <Grid item xs>
            {/* <Paper>xs</Paper> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Balance);

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