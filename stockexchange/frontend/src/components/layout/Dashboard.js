import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import {Typography, Container, Grid, Paper, Tabs, Tab, Box, Button} from '@material-ui/core'
import Header from './Header'
import { ShowChart, AccountBalance, AttachMoney, BarChart, Menu, Dns } from '@material-ui/icons'

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150,
    width: 150,
    borderRadius: 20
  },
});

export class Dashboard extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
        <Container maxWidth="xl" style={{margin: 0, padding: 0}}>
          <Grid component="div" style={{ backgroundColor: '#0083B0', height: '50vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h2" style={{color: '#fff'}}>Invest in Stocks</Typography>
            <Typography style={{color: '#fff'}}>Trusted by Millions of Indians. Start inversting today.</Typography>
          </Grid>
        </Container>
        <div style={{ height: '70vh', padding: 50, alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
          <Grid container 
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{width: '100vh'}}>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <svg style={{color: '#00d09c'}} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"/></svg>
                <Typography variant="h6">Mutual Funds</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <ShowChart style={{color: '#5367ff', height: 30, width: 30}} />
                <Typography variant="h6">Stock</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <BarChart style={{color: '#ffb61b', height: 30, width: 30}}/>
                <Typography variant="h6">Future & Options</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-evenly" alignItems="center"
          style={{width: '100vh'}}>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <AttachMoney style={{color: '#eb5b3c', height: 30, width: 30}}/>
                <Typography variant="h6">US Stocks</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <Dns style={{color: '#d2ab66', height: 30, width: 30}}/>
                <Typography variant="h6">Gold</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={10} className={classes.paper}>
                <AccountBalance style={{color: '#49dddf', height: 30, width: 30}}/>
                <Typography variant="h6">Fixed Deposits</Typography>
              </Paper>
            </Grid>
          </Grid>
          
        </div>
        <div style={{ padding: '50px 200px', display: 'flex', alignSelf: 'center', flexDirection: 'column'}}>
          <Typography variant="h4">Your money. Your choice.</Typography>
          <TabScreen />
        </div>
        {/* <Typography>This is Dashboard</Typography> */}
      </div>
    )
  }
}

export default withStyles(useStyles)(Dashboard);

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eb5b3c',
    },
    secondary: {
      main: '#1890ff',
    },
  },
});

const TabScreen = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <ThemeProvider theme={theme}>
      <Paper square elevation={0} style={{marginTop: 40}} >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab disableRipple icon={<ShowChart />} label="Stocks" {...a11yProps(0)} />
          <Tab disableRipple icon={<Menu />} label="Mutual Funds" {...a11yProps(1)} />
          <Tab disableRipple icon={<Dns />} label="Gold" {...a11yProps(2)} />
          <Tab disableRipple icon={<AttachMoney />} label="US Stocks" {...a11yProps(3)} />
          <Tab disableRipple icon={<AccountBalance />} label="FDs" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={4} style={{marginTop: 50}}>
            <Grid item xs>
              {/* image */}
            </Grid>
            <Grid item xs>
              <div style={{display: "flex", alignItems: "baseline"}}>
                <Typography style={{fontSize: 56, fontWeight: "bold"}}>Zero </Typography>
                <Typography style={{fontSize: 28, paddingLeft: 10}}>account charges</Typography>
              </div>
              <Typography style={{marginTop: 30}}>You don't have to pay a single rupee for opening a stocks account or account maintainance.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Explore Stocks</Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={4} style={{marginTop: 50}}>
            <Grid item xs>
              {/* image */}
            </Grid>
            <Grid item xs>
              <div style={{display: "flex", alignItems: "baseline"}}>
                <Typography style={{fontSize: 56, fontWeight: "bold"}}>0% </Typography>
                <Typography style={{fontSize: 28, paddingLeft: 10}}>commission</Typography>
              </div>
              <Typography style={{marginTop: 30}}>Select from 5000+ direct mutual funds and get higher return than regular funds.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Explore Mutual Funds</Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={4} style={{marginTop: 50}}>
            <Grid item xs>
              {/* image */}
            </Grid>
            <Grid item xs>
              <div style={{display: "flex", alignItems: "baseline"}}>
                <Typography style={{fontSize: 56, fontWeight: "bold"}}>99.9% </Typography>
                <Typography style={{fontSize: 28, paddingLeft: 10}}>purity</Typography>
              </div>
              <Typography style={{marginTop: 30}}>Inverst in digital gold as low as &#8377;10 without any extra commission or making charges.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Explore Gold</Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={4} style={{marginTop: 50}}>
            <Grid item xs>
              {/* image */}
            </Grid>
            <Grid item xs>
              <div style={{display: "flex", alignItems: "baseline"}}>
                <Typography style={{fontSize: 56, fontWeight: "bold"}}>Free </Typography>
                <Typography style={{fontSize: 28, paddingLeft: 10}}>account opening</Typography>
              </div>
              <Typography style={{marginTop: 30}}>Invest in Apple, Google, Netflix and many more US companies that you love without any brokerage fee.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Explore US Stocks</Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={4} style={{marginTop: 50}}>
            <Grid item xs>
              {/* image */}
            </Grid>
            <Grid item xs>
              <div style={{display: "flex", alignItems: "baseline"}}>
                <Typography style={{fontSize: 56, fontWeight: "bold"}}>6.7% </Typography>
                <Typography style={{fontSize: 28, paddingLeft: 10}}>interest rate</Typography>
              </div>
              <Typography style={{marginTop: 30}}>Open fixed deposits in any bank with higher interest rates without opening a bank account.</Typography>
              <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Explore FDs</Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </ThemeProvider>
  )
}