import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from './layout/Header';
import axios from 'axios';
import {Typography, Grid, Box, Paper, Button, Container, Slider, Tabs, Tab,
  Divider, Breadcrumbs, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, TextField, Input, InputAdornment} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { BookmarkBorderOutlined, Share, AccountBalanceWallet } from '@material-ui/icons'
import PropTypes from 'prop-types';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
const useStyles = (theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  textFiled: {
    width: 130,
    height: 30,
    backgroundColor: "#E3F2FD"
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sideBox: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  link: {
    color: "#727272",
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline"
    }
  }
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#0e9170'),
    background: '#1890ff',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
}))(Button);

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
    fontSize: 16,
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

const StyledSlider = withStyles({
  root: {
    color: "#1890ff",
  },
  thumb: {
    height: 30,
    width: 26,
    marginTop: -14,

  }
})(Slider);

class MutualFundsView extends Component {
  state = {
    result: '',
    value: 0,
    sideTabValue: 0,
    sliderValue: 5000,
    selectDate: new Date()
  }
  componentDidMount() {
    this.getMutualFunds()
  }
  getMutualFunds = () => {
    axios.get(`/api/mutual-funds/${this.props.match.params.name}`)
    .then((res) => {
      res.data
      this.setState({result: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    
    const {classes} = this.props;
    const table = [
      {cate: 'Fund Returns', '1Y': `${this.state.result.returns}`, '3Y': `${this.state.result.returnsThree}`, '5Y': `${this.state.result.returnsFive}`, 'Since Inception': '26.5%' },
      {cate: 'Caterogry Average', '1Y': `${this.state.result.category}`, '3Y': `${this.state.result.categoryThree}`, '5Y': `${this.state.result.categoryFive}`, 'Since Inception': '-' },
      {cate: 'Rank Within Category', '1Y': '1', '3Y': '1', '5Y': '1', 'Since Inception': '-' },
    ]
    const handleChange = (event, newValue) => {
      this.setState({value: newValue})
    }
    const handleSideTabChange = (event, newValue) => {
      this.setState({sideTabValue: newValue})
    }
    const handleSliderChange = (event, newValue) => {
      this.setState({sliderValue: newValue})
    };
    const handleDateChange = (date) => {
      this.setState({selectDate: date})
    };
    return (
      <div>
        <Header />
        <div style={{marginTop: 40}}>
          <Grid container spacing={3}>
            <Grid item xs></Grid>
            <Grid item xs={6}>
              <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginTop: 40}}>
                <Link to="/explore" className={classes.link}>
                  Home
                </Link>
                <Link to="/explore/mutual-funds" className={classes.link}>
                  Mutual Funds
                </Link>
                <Typography  style={{color: "#727272"}}>{this.state.result.name}</Typography>
              </Breadcrumbs>
              <div className={classes.top}>
                <Typography style={{fontSize: 24}}>{this.state.result.name}</Typography>
                <Typography style={{fontSize: 28, fontWeight: "bolder"}}>{this.state.result.returns}%</Typography>
              </div>
              <Container style={{height: 400}}></Container>
              <Typography variant="h6">Fund Details</Typography>
              <Grid container spacing={5}>
                <Grid item xs>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>Risk</Typography>
                    <Typography style={{color: "#727272"}}>{this.state.result.risk}</Typography>
                  </div>
                  <Divider />
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>Min SIP Amount</Typography>
                    <Typography style={{color: "#727272"}}>&#8377; {this.state.result.minSIP}</Typography>
                  </div>
                  <Divider />
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>Expense Ratio</Typography>
                    <Typography style={{color: "#727272"}}>{this.state.result.expenseRatio}%</Typography>
                  </div>
                  <Divider />
                </Grid>
                <Grid item xs>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>NAV</Typography>
                    <Typography style={{color: "#727272"}}>&#8377; {this.state.result.nav}%</Typography>
                  </div>
                  <Divider />
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>Fund Started</Typography>
                    <Typography style={{color: "#727272"}}>{this.state.result.fundStarted}</Typography>
                  </div>
                  <Divider />
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{fontWeight: "bold"}}>Fund Size</Typography>
                    <Typography style={{color: "#727272"}}>&#8377; {this.state.result.fundSize} Cr</Typography>
                  </div>
                  <Divider />
                </Grid>
              </Grid>
              <Typography variant="h6" style={{marginTop: 80}}>Returns</Typography>
              <TableContainer component={Paper} style={{marginTop: 30}}>
                <Table style={{minWidth: 650}}>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="right">1Y</TableCell>
                      <TableCell align="right">3Y*</TableCell>
                      <TableCell align="right">5Y*</TableCell>
                      <TableCell align="right">Since inception*</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.map((index) => (
                      <TableRow key={index.cate}>
                        <TableCell component="th" scope="row">{index.cate}</TableCell>
                        <TableCell align="right">{index['1Y']}</TableCell>
                        <TableCell align="right">{index['3Y']}</TableCell>
                        <TableCell align="right">{index['5Y']}</TableCell>
                        <TableCell align="right">{index['Since Inception']}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography style={{color: "#727272", fontWeight: "bold", marginTop: 30}}>*All returns are annualized.</Typography>
              <Paper style={{marginTop: 50}}>
                <AntTabs
                  value={this.state.value}
                  onChange={handleChange}
                  aria-label="icon label tabs example"
                >
                  <AntTab label="SIP" {...a11yProps(0)} />
                  <AntTab label="One Time" {...a11yProps(1)} />
                </AntTabs>
                <TabPanel value={this.state.value} index={0}>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Typography style={{fontWeight: "bold"}}>Minimum SIP amount</Typography>
                    <Typography style={{fontWeight: "bold"}}>&#8377;{this.state.result.minSIP}</Typography>
                  </div>
                  <Divider style={{marginTop: 20}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 30}}>
                    <Typography style={{fontSize: 14}}>Amount per month</Typography>
                    <Typography style={{fontWeight: "bold", color: "#1890ff"}}>&#8377;{this.state.sliderValue}</Typography>
                  </div>
                  <StyledSlider
                    min={100}
                    max={20000}
                    value={this.state.sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    style={{marginTop: 20}}
                  />
                  <Typography style={{fontWeight: "bold"}}>Duration</Typography>
                  <div style={{display: "flex", alignItems: "flex-start", flexDirection: "row"}}>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>1Y Back</Button>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>3Y Back</Button>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>5Y Back</Button>
                  </div>
                  <Divider style={{marginTop: 30}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 30}}>
                    <Typography style={{fontSize: 14}}>Would have become</Typography>
                    <div style={{alignItems: "center"}}>
                      <Typography style={{color: "#1890ff", fontSize: 32}}>&#8377;</Typography>
                      <Typography style={{fontWeight: "bold", color: "#727272",fontSize: 14}}>with {this.state.result.returns}% returns per annum</Typography>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Typography style={{fontWeight: "bold"}}>Minimum Lumpsum amount</Typography>
                    <Typography style={{fontWeight: "bold"}}>&#8377;5000</Typography>
                  </div>
                  <Divider style={{marginTop: 20}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 30}}>
                    <Typography style={{fontSize: 14}}>Amount</Typography>
                    <Typography style={{fontWeight: "bold", color: "#1890ff"}}>&#8377;{this.state.sliderValue}</Typography>
                  </div>
                  <StyledSlider
                    min={100}
                    max={20000}
                    value={this.state.sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    style={{marginTop: 20}}
                  />
                  <Typography style={{fontWeight: "bold"}}>Duration</Typography>
                  <div style={{display: "flex", alignItems: "flex-start", flexDirection: "row"}}>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>1Y Back</Button>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>3Y Back</Button>
                    <Button variant="outlined" style={{color: '#1890ff', margin: 10}}>5Y Back</Button>
                  </div>
                  <Divider style={{marginTop: 30}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 30}}>
                    <Typography style={{fontSize: 14}}>Would have become</Typography>
                    <div style={{alignItems: "center"}}>
                      <Typography style={{color: "#1890ff", fontSize: 32}}>&#8377;</Typography>
                      <Typography style={{fontWeight: "bold", color: "#727272",fontSize: 14}}>with {this.state.result.returns}% returns per annum</Typography>
                    </div>
                  </div>
                  
                </TabPanel>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{padding: 20, marginTop: 40}}>
                <AntTabs
                  value={this.state.sideTabValue}
                  onChange={handleSideTabChange}
                  aria-label="icon label tabs example"
                >
                  <AntTab label="MONTHLY SIP" {...a11yProps(0)} />
                  <AntTab label="ONE-TIME" {...a11yProps(1)} />
                </AntTabs>
                <TabPanel value={this.state.sideTabValue} index={0}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography>SIP Amount</Typography>
                    <Input 
                      id="filled-basic"
                      placeholder="0"
                      type="number"
                      className={classes.textFiled}
                      startAdornment={
                        <InputAdornment position="start">
                          <Typography>&#8377;</Typography>
                        </InputAdornment>
                      }
                      />
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 20, alignItems: "center"}}>
                    <Typography>Monthly SIP date</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                      className={classes.textFiled}
                        disableToolbar
                        variant="inline"
                        format="MM/dd"
                        value={this.state.selectDate}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <Divider style={{margin: 20}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 20, alignItems: "center"}}>
                    <Typography>Balance Available</Typography>
                    <div style={{display: "flex", alignItems: "center"}}><AccountBalanceWallet /><Typography>&#8377;0</Typography></div>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-around", marginTop: 80, alignItems: "center"}}>
                    <Button variant="outlined" style={{color: '#1890ff',  marginTop: 30}}>Add to Cart</Button>
                    <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Start SIP</Button>
                  </div>
                </TabPanel>
                <TabPanel value={this.state.sideTabValue} index={1}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography>SIP Amount</Typography>
                    <Input 
                      id="filled-basic"
                      placeholder="0"
                      type="number"
                      className={classes.textFiled}
                      startAdornment={
                        <InputAdornment position="start">
                          <Typography>&#8377;</Typography>
                        </InputAdornment>
                      }
                      />
                  </div>
                  <Divider style={{margin: 20}} />
                  <div style={{display: "flex", justifyContent: "space-between", marginTop: 20, alignItems: "center"}}>
                    <Typography>Balance Available</Typography>
                    <div style={{display: "flex", alignItems: "center"}}><AccountBalanceWallet /><Typography>&#8377;0</Typography></div>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-around", marginTop: 80, alignItems: "center"}}>
                    <Button variant="outlined" style={{color: '#1890ff',  marginTop: 30}}>Add to Cart</Button>
                    <Button variant="outlined" style={{color: '#fff', backgroundColor: '#1890ff', marginTop: 30}}>Invest</Button>
                  </div>
                </TabPanel>
              </Paper>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(MutualFundsView);

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