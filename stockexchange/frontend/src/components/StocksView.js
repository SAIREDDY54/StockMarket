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


class StocksView extends Component {
  state = {
    result: ''
  }
  componentDidMount() {
    this.getStocks()
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
                <Link to="/explore/stocks" className={classes.link}>
                  Stocks
                </Link>
                <Typography style={{color: "#727272"}}>{this.state.result.name}</Typography>
              </Breadcrumbs>
              <div className={classes.top}>
                <Box></Box>
                <div>
                  <BookmarkBorderOutlined />
                  <Share />
                </div>
              </div>
              <div className={classes.top}>
                <Typography style={{fontSize: 24}}>{this.state.result.name}</Typography>
              </div>
              <Typography style={{fontSize: 28}}>&#8377; {this.state.result.price}</Typography>
              <Container style={{height: 400}}></Container>
              <Typography variant="h6">Performance</Typography>
              <Grid container spacing={2} style={{alignItems: "center", marginTop: 30}}>
                <Grid item xs>
                  <Typography>Today's Low</Typography>
                  <Typography style={{fontWeight: "bold"}}>{this.state.result.todayslow}</Typography>
                </Grid>
                <Grid item xs={8}><BorderLinearProgress variant="determinate" value={80} /></Grid>
                <Grid item xs>
                  <Typography>Today's High</Typography>
                  <Typography style={{fontWeight: "bold"}}>{this.state.result.todayshigh}</Typography>
                </Grid>
              </Grid>
              <Divider style={{margin: 20}} />
              <Grid container spacing={5}>
                <Grid item xs>
                  <Typography>Open Price</Typography>
                  <Typography>{this.state.result.openPrice}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Prev. Close</Typography>
                  <Typography>{this.state.result.prevPrice}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Volume</Typography>
                  <Typography>{this.state.result.volume}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography>Value</Typography>
                  <Typography>{this.state.result.value} Cr</Typography>
                </Grid>
              </Grid>
              <Typography variant="h6" style={{marginTop: 80}}>Market Depth</Typography>
              <Typography variant="h6" style={{marginTop: 80}}>Fundamentals</Typography>
              <Grid container spacing={5}>
                <Grid item xs>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>Market Cap</Typography>
                    <Typography style={{fontWeight: "bold"}}>&#8377; {this.state.result.marketCap} Cr</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>P/E Ratio</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.peRatio}</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>P/B Ratio</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.pbRatio}</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>Industry P/E</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.industryPE}</Typography>
                  </div>
                </Grid>
                <Divider orientation="vertical" />
                <Grid item xs>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>ROE</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.roe}%</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>EPS(TTM)</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.eps}</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>Dividend Yield</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.dividendYield}%</Typography>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                    <Typography style={{color: "#727272"}}>Book Value</Typography>
                    <Typography style={{fontWeight: "bold"}}>{this.state.result.bookValue}</Typography>
                  </div>
                </Grid>
              </Grid>
              <Typography variant="h6" style={{marginTop: 80}}>Financials</Typography>
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
            <Grid item xs></Grid>
          </Grid>
        </div>
        {/* <p>this is StocksView {this.state.result.price}</p> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(StocksView);
