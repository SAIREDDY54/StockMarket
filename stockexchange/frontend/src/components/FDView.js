import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from './layout/Header';
import axios from 'axios';
import {Typography, Grid, Box, Paper, Button, Container, LinearProgress, Divider, Breadcrumbs, TextField, Input, InputAdornment} from '@material-ui/core'
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { BookmarkBorderOutlined, Share } from '@material-ui/icons'
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


class FDView extends Component {
  state = {
    result: '',
    investmentAmount: 0
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    this.getFDs()
  }
  getFDs = () => {
    axios.get(`/api/fixed-deposits/${this.props.match.params.name}`)
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
    var maturityAmount = this.state.investmentAmount !== 0 && this.state.investmentAmount !== null ? (this.state.investmentAmount +(this.state.investmentAmount * this.state.result.percentage / 100)): 0
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
                <Link to="/explore/fixed-deposits" className={classes.link}>
                  US Stocks
                </Link>
                <Typography style={{color: "#727272"}}>{this.state.result.name}</Typography>
              </Breadcrumbs>
              <div className={classes.top}>
                <Typography style={{fontSize: 24, fontWeight: 500}}>{this.state.result.name}</Typography>
                <Typography style={{fontSize: 28, fontWeight: "bold"}}>{this.state.result.percentage}%</Typography>
              </div>
              <Container style={{height: 400}}></Container>
              <Typography variant="h6" style={{marginTop: 80}}>FD Details</Typography>
              <div style={{display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
                <div>
                  <Typography>Min. Amount</Typography>
                  <Typography style={{fontWeight: 600}}>&#8377; {this.state.result.minAmount}</Typography>
                </div>
                <div>
                  <Typography>Compounding</Typography>
                  <Typography style={{fontWeight: 600}}>{this.state.result.compounding}</Typography>
                </div>
                <div>
                  <Typography>Premature Withdrawal</Typography>
                  <Typography style={{fontWeight: 600}}>{this.state.result.preWithdrawal}</Typography>
                </div>
              </div>
              <div style={{marginTop: 20}}>
                <Typography>Assured Returns</Typography>
                <Typography style={{fontWeight: 600}}>Insured by the government covering both principal and interest amount</Typography>
              </div>
              <Typography variant="h6" style={{marginTop: 80}}>About {this.state.result.name} Company</Typography>
              <Typography style={{marginTop: 15}}>{this.state.result.about}</Typography>
              <div style={{display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 30}}>
                <div>
                  <Typography>Crisil Rating</Typography>
                  <Typography style={{fontWeight: 600}}>{this.state.result.crisilRating}</Typography>
                </div>
                <div>
                  <Typography>CEO</Typography>
                  <Typography style={{fontWeight: 600}}>{this.state.result.CEO}</Typography>
                </div>
                <div>
                  <Typography>Headquarters</Typography>
                  <Typography style={{fontWeight: 600}}>{this.state.result.headquaters}</Typography>
                </div>
              </div>
              </Grid>
            <Grid item xs={3}>
              <Paper style={{padding: 20, marginTop: 40}}>
                <Typography style={{fontWeight: 500}}>Open FD</Typography>
                <Divider style={{ marginTop: 20}} />
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                  <Typography>Investment Amount</Typography>
                  <Input 
                    id="filled-basic"
                    placeholder="25000"
                    type="number"
                    name="investmentAmount"
                    value={this.state.investmentAmount}
                    onChange={this.onChange}
                    className={classes.textFiled}
                    startAdornment={
                      <InputAdornment position="start">
                        <Typography>&#8377;</Typography>
                      </InputAdornment>
                    }
                    />
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                  <Typography>Interest Rate</Typography>
                  <Typography style={{fontWeight: 500}}>{this.state.result.percentage}% p.a.</Typography>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                  <Typography>Time Period</Typography>
                  <Typography style={{fontWeight: 500}}>91 Days</Typography>
                </div>
                <Divider style={{ marginTop: 20}} />
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
                  <Typography>Maturity Amount</Typography>
                  <Typography style={{fontWeight: 500}}>&#8377;{maturityAmount}</Typography>
                </div>
                <Typography style={{fontSize: 12, fontWeight: 400, alignSelf: "center", marginTop: 35}}>FDs are insured up to &#8377; 5 Lakh by RBI </Typography>
                <Typography style={{fontSize: 12, display: 'flex'}}>By clicking below, you agree to <Typography style={{color: "#1890ff", fontSize: 12}}>Terms & Conditions</Typography></Typography>
                <ColorButton 
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                  <Typography style={{ textDecoration: 'none', color: '#fff', fontSize: 14}}>proceed</Typography>
                </ColorButton >
              </Paper>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(FDView);
