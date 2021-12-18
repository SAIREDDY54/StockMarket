import React, { Component } from 'react';
import {AppBar, Grid, Menu, Paper, Typography, Button, Toolbar, InputBase, IconButton, Divider,
  Tabs, Tab, Box, FormControl, Select, MenuItem, FormHelperText, TextField, Input,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@material-ui/core';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { Brush, Refresh, Equalizer, SettingsOutlined, MultilineChart, Schedule } from '@material-ui/icons'
const useStyles = (theme) => ({
  menuItems: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 60,
    width: 330
  },
  root: {
    boxShadow: "none",
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      color: '#1890ff'
    }
  },
  appbar: {
    backgroundColor: '#ffffff',
    color: '#000',
    boxShadow: "none",
    borderBottom: "1px solid #e2e2e2",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.05,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  explorelink: {
    color: '#000',
    textDecoration: 'none',
    paddingLeft: 20,
    '&:hover': {
      color: '#1890ff',
    },
  },
  search: {
    flexGrow: 0.2,
    position: 'relative',
    boxShadow: '1px 1px 4px #e2e2e2',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #f1f1f1',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.02),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  sideBox: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
    minWidth: "100%",
    alignSelf: 'flex-start',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      backgroundColor: "#E3F2FD",
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#0e9170'),
    background: '#1890ff',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
}))(Button);

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

class YahooStocks extends Component {
  state = {
    result: '',
    analysis: '',
    summary: '',
    chartData: '',
    value: 0,
    region: '',
    company: '',
    regionSmry: '',
    companySmry: '',
    intervalChar: '',
    companyChar: '',
    rangeChar: '',
    regionChar: ''
  }
  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  //get analysis
  handleRegionChange = (event) => {
    this.setState({region: event.target.value})
  }
  // get summary
  handleRegionSmryChange = (event) => {
    this.setState({regionSmry: event.target.value})
  }
  // get charts
  handleIntervalCharChange = (event) => {
    this.setState({intervalChar: event.target.value})
  }
  handleRangeCharChange = (event) => {
    this.setState({rangeChar: event.target.value})
  }
  handleRegionCharChange = (event) => {
    this.setState({regionChar: event.target.value})
  }

  componentDidMount() {
    this.getStocks()
    this.getAnalysisData()
    this.getSummaryData()
    this.getChartsData()
  }
  getStocks = () => {
    axios.get(`/api/stocks/${this.props.match.params.name}`)
    .then((res) => {
      res.data
      this.setState({result: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  getAnalysisData = () => {
    axios.get(`/api/getRapidAPI/get-analysis/${this.state.company}/${this.state.region}`)
    .then((res) => {
      res.data
      console.log(res.data)
      this.setState({analysis: res.data})
    })
  }
  getSummaryData = () => {
    axios.get(`/api/getRapidAPI/get-summary/${this.state.companySmry}/${this.state.regionSmry}`)
    .then((res) => {
      res.data
      console.log(res.data)
      this.setState({summary: res.data})
    })
  }
  getChartsData = () => {
    axios.get(`/api/getRapidAPI/get-charts/${this.state.intervalChar}/${this.state.companyChar}/${this.state.rangeChar}/${this.state.regionChar}`)
    .then((res) => {
      res.data
      console.log(res.data)
      this.setState({chartData: res.data})
    })
  }
  render() {
    const {classes} = this.props;
    const jsonobj = {
      "chart": {
        "result tr": [
          {
            "meta": {
              "currency": "INR",
              "symbol": "LUPIN.NS"
            },
            "timestamp": [
              1621320900,
              1621321200,
            ],
            "indicators": {
              "quote": [
                {
                  "low": [
                    1187.09,
                    1191.0,
                  ]
                }
              ]
            }
          }
        ]
      }
    }
    // const labels = 
    //   this.state.chartData.chart['result'].map((index) => {
    //   return index.timestamp
    // })
    // const chartDataaa =
    //   this.state.chartData.chart['result'].map((index) => {
    //   index.indicators.quote.map((item) => {
    //     return item.low
    //   })
    // })
    // for(var l in this.state.chartData.chart.)
    const data = {
      labels: ['fvdgb', 'sfvbdbg', 'wewsde'],
      datasets: [{
        label: 'price',
        data: [34, 98, 56],
        fill: false,
        borderColor: '#1890ff',
        // tension: 0.1
      }]
    }
    return (
      <div>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <span style={{flexGrow: 0.05}}></span>
            <Typography className={classes.title} variant="h6" noWrap>{this.state.result.name} </Typography>
            <Typography variant="h6">&#8377;{this.state.result.price} </Typography>
            <span style={{flexGrow: 0.25}}></span>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>

        <div style={{padding: 20, backgroundColor: '#f1f1f1'}}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Paper>
                <AntTabs
                  orientation="vertical"
                  variant="scrollable"
                  value={this.state.value}
                  onChange={this.handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                  <AntTab label="Get Analysis" {...a11yProps(0)} />
                  <AntTab label="Get Charts" {...a11yProps(1)} />
                  <AntTab label="Get Summary" {...a11yProps(2)} />
                </AntTabs>
              </Paper>
            </Grid>
            <Grid item xs={10}>
              {/* get Analysis */}
              <TabPanel value={this.state.value} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    
                  </Grid>
                  <Grid item xs={3}>
                    <Paper>
                      <div className={classes.sideBox}>
                        <Input 
                          id="standard-required" 
                          label="Company Name" 
                          value={this.state.company}
                          name="company"
                          fullWidth
                          placeholder="Enter Company Name"
                          onChange={this.onChange}
                        />
                        <FormControl fullWidth style={{marginTop: 20}}>
                          <Select
                            value={this.state.region}
                            onChange={this.handleRegionChange}
                            displayEmpty
                            fullWidth
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" disabled>
                              Region
                            </MenuItem>
                            <MenuItem value="IN">India</MenuItem>
                            <MenuItem value="US">United States</MenuItem>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                          </Select>
                          <FormHelperText>Select a region</FormHelperText>
                        </FormControl>
                        <ColorButton 
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={this.getAnalysisData}
                        >
                          <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>GET ANALYSIS</Typography>
                        </ColorButton >
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </TabPanel>
              {/* get charts */}
              <TabPanel value={this.state.value} index={1}>
              <Grid container spacing={2}>
                  <Grid item xs={8}>
                    {this.state.chartData === '' ? (<Typography>no chart found</Typography>) : (
                      <Line data={data} />
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <Paper>
                      <div className={classes.sideBox}>
                        <FormControl fullWidth style={{marginTop: 20}}>
                          <Select
                            value={this.state.intervalChar}
                            onChange={this.handleIntervalCharChange}
                            displayEmpty
                            fullWidth
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" disabled>
                              Interval
                            </MenuItem>
                            <MenuItem value="5m">5m</MenuItem>
                            {/* <MenuItem value="US">United States</MenuItem> */}
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                          </Select>
                          <FormHelperText>Select an interval</FormHelperText>
                        </FormControl>
                        <Input 
                          id="standard-required" 
                          label="Company Name" 
                          value={this.state.companyChar}
                          name="companyChar"
                          fullWidth
                          placeholder="Enter Company Name"
                          onChange={this.onChange}
                        />
                        <FormControl fullWidth style={{marginTop: 20}}>
                          <Select
                            value={this.state.rangeChar}
                            onChange={this.handleRangeCharChange}
                            displayEmpty
                            fullWidth
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" disabled>
                              Range
                            </MenuItem>
                            <MenuItem value="1d">1 Day</MenuItem>
                            <MenuItem value="5d">5 days</MenuItem>
                            <MenuItem value="1mo">1 Month</MenuItem>
                          </Select>
                          <FormHelperText>Select the Range</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth style={{marginTop: 20}}>
                          <Select
                            value={this.state.regionChar}
                            onChange={this.handleRegionCharChange}
                            displayEmpty
                            fullWidth
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" disabled>
                              Region
                            </MenuItem>
                            <MenuItem value="IN">India</MenuItem>
                            <MenuItem value="US">United States</MenuItem>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                          </Select>
                          <FormHelperText>Select a region</FormHelperText>
                        </FormControl>
                        <ColorButton 
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={this.getChartsData}
                        >
                          <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>GET charts</Typography>
                        </ColorButton >
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </TabPanel>
              {/* get summary */}
              <TabPanel value={this.state.value} index={2}>
              <Grid container spacing={2}>
                  <Grid item xs={8}>
                    {this.state.summary === '' ? (<Typography>no data</Typography>) : (
                      <Paper style={{padding: 20}}>
                        <Grid container spacing={2}>
                          <Grid item xs={3}>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>Sector</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>City</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>Phone</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>Country</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>Website</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>Regular Market Open</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>City</Typography>
                            <Typography style={{padding: 5, fontWeight: 500, color: '#727272'}}>City</Typography>
                          </Grid>
                          <Divider orientation="vertical" />
                          <Grid item xs={4}>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.summaryProfile.sector}</Typography>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.summaryProfile.city}</Typography>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.summaryProfile.phone}</Typography>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.summaryProfile.country}</Typography>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.summaryProfile.website}</Typography>
                            <Typography style={{padding: 5, color: '#464646'}}>{this.state.summary.price.regularMarketOpen.fmt}</Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                      // <TableContainer component={Paper} style={{marginTop: 40}}>
                      //   <Table className={classes.table} aria-label="simple table">
                      //     <TableHead>
                      //       <TableRow>
                      //         <TableCell>Name</TableCell>
                      //         <TableCell align="right">Sector</TableCell>
                      //         <TableCell align="right">Time period</TableCell>
                      //       </TableRow>
                      //     </TableHead>
                      //     <TableBody>
                      //       <TableRow>
                      //         <TableCell component="th" scope="row">{index.name}</TableCell>
                      //         <TableCell align="right">{this.state.summary.summaryProfile.sector}</TableCell>
                      //         <TableCell align="right">1 year</TableCell>
                      //       </TableRow>
                      //     </TableBody>
                      //   </Table>
                      // </TableContainer>
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <Paper>
                      <div className={classes.sideBox}>
                        <Input 
                          id="standard-required" 
                          label="Company Name" 
                          value={this.state.companySmry}
                          name="companySmry"
                          fullWidth
                          placeholder="Enter Company Name"
                          onChange={this.onChange}
                        />
                        <FormControl fullWidth style={{marginTop: 20}}>
                          <Select
                            value={this.state.regionSmry}
                            onChange={this.handleRegionSmryChange}
                            displayEmpty
                            fullWidth
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" disabled>
                              Region
                            </MenuItem>
                            <MenuItem value="IN">India</MenuItem>
                            <MenuItem value="US">United States</MenuItem>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                          </Select>
                          <FormHelperText>Select a region</FormHelperText>
                        </FormControl>
                        <ColorButton 
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          onClick={this.getSummaryData}
                        >
                          <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>GET ANALYSIS</Typography>
                        </ColorButton >
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </div>
        {/*  <Grid container spacing={2}>
            <Grid item xs={9}>
              <Paper style={{padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                  <Brush />
                  <Refresh style={{marginLeft: 20}} />
                </div>
                <div style={{display: 'flex',alignItems: 'center'}}>
                  <Schedule style={{color: '#464646'}}/> <Typography style={{marginRight: 15, fontSize: 13}}>5min</Typography>
                  <Equalizer style={{color: '#464646'}}/> <Typography style={{marginRight: 15, fontSize: 13}}>Chart</Typography>
                  <MultilineChart style={{color: '#464646'}}/> <Typography style={{marginRight: 15, fontSize: 13}}>Indicators</Typography>
                  <SettingsOutlined style={{color: '#464646'}}/> <Typography style={{marginRight: 15, fontSize: 13}}>Toggles</Typography>
                </div>
              </Paper>
              <Paper style={{padding: 20, height: "76vh", marginTop: 20}}>
                <div>skbd</div>
                <div>skfj</div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
            <Paper>
              <div className={classes.sideBox}>
                <Typography style={{fontSize: 22, marginTop: 30}}>Introducing Stocks</Typography>
                <Typography style={{fontSize: 12, color: "#727272", marginTop: 30}}>Investing in stocks will never be the same again</Typography>
                <ColorButton 
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>try it out</Typography>
                </ColorButton >
              </div>
            </Paper>
            </Grid>
          </Grid>
        </div> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(YahooStocks);

