import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from './layout/Header';
import axios from 'axios';
import {Typography, Grid, Box, Paper, Button, Container, LinearProgress, Divider, Breadcrumbs} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { BookmarkBorderOutlined, Share } from '@material-ui/icons'
const useStyles = (theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
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

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


class USStocksView extends Component {
  state = {
    result: ''
  }
  componentDidMount() {
    this.getUSStocks()
  }
  getUSStocks = () => {
    axios.get(`/api/usstocks/${this.props.match.params.name}`)
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
                <Link to="/explore/usstocks" className={classes.link}>
                  US Stocks
                </Link>
                <Typography style={{color: "#727272"}}>{this.state.result.organisation}</Typography>
              </Breadcrumbs>
              <div className={classes.top}>
                <Typography style={{fontSize: 24, fontWeight: 500}}>{this.state.result.organisation}</Typography>
                <Typography style={{fontSize: 28, fontWeight: "bold"}}>&#36;{this.state.result.price}</Typography>
              </div>
              <Container style={{height: 400}}></Container>
              <Typography variant="h6">Performance</Typography>
              <Grid container spacing={2} style={{alignItems: "center", marginTop: 30}}>
                <Grid item xs>
                  <Typography>Today's Low</Typography>
                  <Typography style={{fontWeight: "bold"}}>&#36;{this.state.result.todayslow}</Typography>
                </Grid>
                <Grid item xs={8}><BorderLinearProgress variant="determinate" value={80} /></Grid>
                <Grid item xs>
                  <Typography>Today's High</Typography>
                  <Typography style={{fontWeight: "bold"}}>&#36;{this.state.result.todayshigh}</Typography>
                </Grid>
              </Grid>
              <Divider style={{margin: 20}} />
              <Grid container spacing={5}>
                <Grid item xs>
                  <Typography>Open Price</Typography>
                  <Typography>&#36;{this.state.result.openPrice}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Prev. Close</Typography>
                  <Typography>&#36;{this.state.result.prevPrice}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Volume</Typography>
                  <Typography>{this.state.result.volume}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Avg. Volume</Typography>
                  <Typography>{this.state.result.avgVolume}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" style={{marginTop: 80}}>Company Statistics</Typography>
              <Grid container spacing={3} style={{marginTop: 20}}>
                <Grid item xs={3}>
                  <Typography>Market Cap</Typography>
                  <Typography style={{fontWeight: 500}}>&#36;{this.state.result.marketCap}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>P/B Ratio</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.pbRatio}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>P/E Ratio</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.peRatio}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Enterprise Value</Typography>
                  <Typography style={{fontWeight: 500}}>&#36;{this.state.result.enterpriseValue}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Div. Yield</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.dividendYield}%</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Book Value</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.bookValue}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>EPS(TTM)</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.eps}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>ROE</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.roe}</Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" style={{marginTop: 80}}>About the Company</Typography>
              <Typography style={{marginTop: 10}}>{this.state.result.about}</Typography>
              <div style={{display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
                <div>
                  <Typography style={{fontWeight: 600}}>Organisation</Typography>
                  <Typography style={{color: "#1890ff"}}>{this.state.result.organisation}</Typography>
                </div>
                <div>
                  <Typography style={{fontWeight: 600}}>Industry</Typography>
                  <Typography>{this.state.result.industry}</Typography>
                </div>
                <div>
                  <Typography style={{fontWeight: 600}}>Headquarters</Typography>
                  <Typography>{this.state.result.headquarters}</Typography>
                </div>
              </div>
              <Typography variant="h6" style={{marginTop: 80}}>Financials</Typography>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                <div className={classes.sideBox}>
                  
                </div>
              </Paper>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
        {/* <p>this is USStocksView {this.state.result.price}</p> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(USStocksView);
